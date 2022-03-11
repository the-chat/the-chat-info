import yaml from "js-yaml"
import fs from "fs"

// todo?: naming

// learn: is "legalInfoThemes" name ok for legal info (<name>: <content>)

const keysFilter = (obj, filter) =>
  Object.entries(obj)
    .filter(filter)
    .reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {})

const writeNanespace = (locale, name, namespacee) =>
  fs.writeFileSync(
    `./public/locales/${locale}/${name}.json`,
    JSON.stringify(namespacee, null, 2) + "\n"
  )

const transformText = (info) =>
  (info.startsWith('"') ? info.slice(1, -2) : info).trim()

const transformRecursive = (obj) =>
  Object.entries(obj).reduce(
    (obj, [key, v]) => ({
      ...obj,
      [key]: typeof v == "string" ? transformText(v) : transformRecursive(v),
    }),
    {}
  )

const createPagesFromInfoProp = (obj, preffix) =>
  Object.entries(obj).reduce(
    (titles, [title, info]) => ({
      ...titles,
      [preffix + title]: info.split("\n")[0].slice(2),
    }),
    {}
  )

const compile = (locale) => {
  const info = transformRecursive(
    yaml.load(fs.readFileSync("./info.yaml", "utf8"))[locale]
  )

  const newPages = Object.assign(
    keysFilter(info, ([key]) => key.startsWith("/")),
    createPagesFromInfoProp(info.legalInfoThemes, "/legal/"),
    createPagesFromInfoProp(info.aboutConsumers, "/about/")
  )

  writeNanespace(
    locale,
    "info",
    keysFilter(info, ([key]) => !key.startsWith("/"))
  )
  writeNanespace(locale, "pages", newPages)
}

compile("en")
compile("ru")
