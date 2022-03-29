import { appWithTranslation } from "next-i18next"
import { useState } from "react"
import { auth, db } from "utils/firebase"
import { AppProps } from "next/app"
import { Interface, useSidebarButtonsDefaultSortFn } from "@the-chat/ui-kit"
import ReactMarkdown from "react-markdown"
import manifest from "public/manifest.json"

const App = ({ Component, pageProps }: AppProps) => (
  <Interface
    configProviderValue={{
      ReactMarkdown,
      auth,
      sidebarOpen: useState<boolean>(false),
      signOutArgs: [auth, "SIGN OUT", "ERROR"],
      newUser: false,
      containerMaxWidth: "md",
      useSidebarButtons: () => useSidebarButtonsDefaultSortFn({}),
    }}
    name={manifest.name}
    userProviderParams={{
      db,
      path: "users/",
      useDefaultValueForDbDataInProviderWrapper: () => ({
        displayName: "",
        email: "",
        lang: "en",
        phoneNumber: "",
        photoURL: "",
        uid: "",
      }),
    }}
  >
    <Component {...pageProps} />
  </Interface>
)

export default appWithTranslation(App)
