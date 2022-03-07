import { List, ListItem, Typography } from "@mui/material"
import { useTranslation } from "next-i18next"
import { Link } from "@the-chat/ui-kit"
import nextJSPropsWithTranslation from "utils/nextJSPropsWithTranslation"
import pages from "public/locales/en/pages.json"

// todo?: should i translate all this
const LegalInfo = () => {
  const { t } = useTranslation("pages")
  const [lit] = useTranslation("legal-info")

  const legalInfoPages = Object.keys(pages).filter((page) =>
    page.startsWith("/legal/")
  )

  return (
    <>
      <Typography variant="h5">{lit("copyright")}</Typography>
      <List>
        {/* todo: to const */}
        {legalInfoPages.map((legalInfoHref) => (
          <ListItem key={legalInfoHref}>
            <Link href={legalInfoHref}>{t(legalInfoHref)}</Link>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default LegalInfo
export const getStaticProps = nextJSPropsWithTranslation(["info"])
