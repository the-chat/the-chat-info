import { appWithTranslation } from "next-i18next"
import { useState } from "react"
import { auth, db } from "utils/firebase"
import { AppProps } from "next/app"
import { Header, Wrapper } from "@the-chat/ui-kit"
import { INFO, SSO } from "@the-chat/config"
import { useSidebarButtonsDefaultSortFn } from "@the-chat/ui-kit"

const App = ({ Component, pageProps }: AppProps) => (
  <Wrapper
    configProviderValue={{
      auth,
      sidebarOpen: useState<boolean>(false),
      signOutArgs: [auth, "SIGN OUT", "ERROR"],
      noUser: false,
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
    <Header />
    <Component {...pageProps} />
  </Wrapper>
)

export default appWithTranslation(App)
