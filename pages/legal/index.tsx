import Section from "components/Section"
import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"

// todo?: should i translate all this
const LegalInfo = () => (
  <Section filter={(page) => page.startsWith("/legal/")} />
)

export default LegalInfo
export const getStaticProps = nextJSPropsWithTranslation(["info", "pages"])
