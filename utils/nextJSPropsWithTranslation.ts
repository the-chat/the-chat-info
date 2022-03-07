import getNJPWT from "@the-chat/utils/nextJSPropsWithTranslation"

type Locale = "info" | "pages"

const nextJSPropsWithTranslation = getNJPWT<Locale>()

export default nextJSPropsWithTranslation
