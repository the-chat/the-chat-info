import Section from "components/Section"
import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"

const Index = () => (
  <Section filter={(page) => page == page.match(/\/.+/)?.[0]} />
)

export default Index
export const getStaticProps = nextJSPropsWithTranslation(["info", "pages"])
