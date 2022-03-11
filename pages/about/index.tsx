import Section from "components/Section"
import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"

// todo?: should i translate all this
const AboutConsumers = () => (
  <Section filter={(page) => page.startsWith("/about/")} />
)

export default AboutConsumers
export const getStaticProps = nextJSPropsWithTranslation(["info"])
