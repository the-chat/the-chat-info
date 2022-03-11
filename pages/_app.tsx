import { appWithTranslation } from "next-i18next"
import { useState } from "react"
import { auth, db } from "utils/firebase"
import { AppProps } from "next/app"
import { INFO, SSO } from "@the-chat/config"
import { Interface, useSidebarButtonsDefaultSortFn } from "@the-chat/ui-kit"

const App = ({ Component, pageProps }: AppProps) => (
  <Interface
    configProviderValue={{
      auth,
      sidebarOpen: useState<boolean>(false),
      signOutArgs: [auth, "SIGN OUT", "ERROR"],
      newUser: false,
      containerMaxWidth: "md",
      useSidebarButtons: () => useSidebarButtonsDefaultSortFn({}),
      InfoConfig: {
        ...INFO,
        HOST: INFO.DEFAULT_INFO_HOST,
      },
      SSOConfig: {
        ...SSO,
        HOST: SSO.DEFAULT_SSO_HOST,
      },
    }}
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
