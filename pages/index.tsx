import { INFO } from "@the-chat/config"
import Section from "components/Section"
import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"

const Index = () => (
  <Section filter={(page) => [INFO.aboutUrl, INFO.legalUrl].includes(page)} />
)

export default Index
export const getStaticProps = nextJSPropsWithTranslation(["info", "pages"])
