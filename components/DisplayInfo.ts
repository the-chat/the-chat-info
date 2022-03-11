import { getDisplayInfo } from "@the-chat/ui-kit"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const DisplayInfo = getDisplayInfo(ReactMarkdown, remarkGfm)

export default DisplayInfo
