import { useRouter } from "next/router"
import info from "public/locales/en/info.json"
import { i18n } from "next-i18next.config.js"
import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"
import { DisplayInfo } from "@the-chat/ui-kit"
const { legalInfoThemes } = info

const LegalInfoDocument = () => {
  const { legalInfoTheme } = useRouter().query

  return <DisplayInfo tKey={"legalInfoThemes." + legalInfoTheme} />
}

export default LegalInfoDocument
export const getStaticProps = nextJSPropsWithTranslation(["info"])
export const getStaticPaths = () => {
  return {
    paths: i18n.locales.flatMap((locale) =>
      Object.keys(legalInfoThemes).map((legalInfoTheme) => ({
        params: {
          legalInfoTheme,
        },
        locale,
      }))
    ),
    // learn
    fallback: false,
  }
}
