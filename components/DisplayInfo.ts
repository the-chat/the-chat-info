import { getDisplayInfo } from "@the-chat/ui-kit"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

// TODO: TYPES IN UI KIT MARKDOWN AND DISPLAYINFO
const DisplayInfo = getDisplayInfo(
  ReactMarkdown as (props: unknown) => JSX.Element,
  remarkGfm
)

export default DisplayInfo
