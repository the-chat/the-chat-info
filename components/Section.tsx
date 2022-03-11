import { List, ListItem, Typography } from "@mui/material"
import { Link } from "@the-chat/ui-kit"
import pages from "public/locales/en/pages.json"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

const Section = ({ filter }: { filter: (page: string) => boolean }) => {
  const { t } = useTranslation("pages")
  const { asPath } = useRouter()

  return (
    <>
      <Typography variant="h5">{t(asPath)}</Typography>
      <List>
        {/* todo: to const */}
        {Object.keys(pages)
          .filter(filter)
          .map((href) => (
            <ListItem key={href}>
              <Link href={href}>{t(href)}</Link>
            </ListItem>
          ))}
      </List>
    </>
  )
}

export default Section
