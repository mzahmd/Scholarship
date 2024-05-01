import reactSvg from "@/assets/react.svg"
import { ModeToggle } from "./mode-toggle"

export default function LogoHeader() {
  return (
    <div className="flex justify-between my-5 me-2">
      <img src={reactSvg} />
      <ModeToggle />
    </div>
  )
}