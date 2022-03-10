import { DisplayInfo as get } from "@the-chat/ui-kit"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const DisplayInfo = get(ReactMarkdown, remarkGfm)

export default DisplayInfo
