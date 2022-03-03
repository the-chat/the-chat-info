import yaml from "js-yaml"
import fs from "fs"

// todo?: naming

// learn: is "legalInfoThemes" name ok for legal info (<name>: <content>)

const writeNanespace = (locale, name, namespacee) =>
  fs.writeFileSync(
    `./public/locales/${locale}/${name}.json`,
    JSON.stringify(namespacee, null, 2) + "\n"
  )

const transformInfo = (info) => {
  return (info.startsWith('"') ? info.slice(1, -2) : info).trim()
}

const compile = (locale) => {
  const info = yaml.load(fs.readFileSync("./info.yaml", "utf8"))[locale]
  info.legalInfoThemes = Object.entries(info.legalInfoThemes).reduce(
    (data, [legalInfoTheme, legalInfo]) => {
      return Object.assign(data, {
        [legalInfoTheme]: transformInfo(legalInfo),
      })
    },
    {}
  )

  const pages = JSON.parse(
    fs.readFileSync("./public/locales/" + locale + "/pages.json")
  )

  const newPages = Object.assign(
    pages,
    Object.entries(info.legalInfoThemes).reduce(
      (legalInfoTitles, [legalInfoTheme, legalInfo]) => ({
        ...legalInfoTitles,
        ["/legal/" + legalInfoTheme]: legalInfo.split("\n")[0].slice(2),
      }),
      {}
    )
  )

  info.about = transformInfo(info.about)

  writeNanespace(locale, "info", info)
  writeNanespace(locale, "pages", newPages)
}

compile("en")
compile("ru")
