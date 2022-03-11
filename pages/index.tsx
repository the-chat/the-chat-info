import Section from "components/Section"

const Index = () => (
  <Section filter={(page) => page == page.match(/\/.+\//)?.[0]} />
)

export default Index
