import reactSvg from "@/assets/react.svg"

export default function LogoHeader() {
  return (
    <div className="flex justify-end my-5 me-2">
      <img src={reactSvg} />
    </div>
  )
}