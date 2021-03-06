import { useRouter } from "next/router"
import info from "public/locales/en/info.json"
import { i18n } from "next-i18next.config.js"
import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"
import { DisplayInfo } from "@the-chat/ui-kit"
const { aboutConsumers } = info

const AboutConsumerDocument = () => {
  const { aboutConsumer } = useRouter().query

  return <DisplayInfo ns="info" tKey={"aboutConsumers." + aboutConsumer} />
}

export default AboutConsumerDocument
export const getStaticProps = nextJSPropsWithTranslation(["info"])
export const getStaticPaths = () => {
  return {
    paths: i18n.locales.flatMap((locale) =>
      Object.keys(aboutConsumers).map((aboutConsumer) => ({
        params: {
          aboutConsumer,
        },
        locale,
      }))
    ),
    // learn
    fallback: false,
  }
}
