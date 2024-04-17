import { plant7 } from "../assets"


const TopHero = () => {
  return (
    <div>
       <div className="w-[98%] flex flex-col h-[175px] relative p-2 rounded-md bg-green-700 overflow-hidden">
          <span>
            <h3 className=" text-white font-medium mushin">Get Our weekly Bonus Deal</h3>
            <p className="text-gray-200 font-medium w-[200px] mt-2 text-sm">Buy 3 or more plants and get our free e-book</p>
            <img src={plant7} alt="" className=" absolute right-0 bottom-0 translate-x-24 translate-y-9"/>
            <h3 className=" absolute bottom-0 p-3 font-semibold text-green-300 mushin cursor-pointer">Go to Shop</h3>
          </span>
       </div>
    </div>
  )
}

export default TopHero
