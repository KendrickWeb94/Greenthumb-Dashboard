import { logo2 } from "../assets"


export const Logo = () => {
  return (
    <div className="flex items-center gap-1">
        <img src={logo2} alt="" className=" max-w-[50px]" />
        <p className="montserrat translate-y-2 font-semibold text-green-800 text-base">Green <span className="text-orange-400">Thumb</span></p>
    </div>
  )
}
