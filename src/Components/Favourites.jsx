import {
  plant1,
  plant2,
  plant3,
  plant4,
  plant5,
  plant6,
  plant7,
  plant8,
} from "../assets";

const Favourites = () => {
  return (
    <div className=" nunito font-semibold mt-7 text-sm">
      Featured Products
      <div className="mt-1  grid grid-cols-8 gap-1 ">
        <div className=" h-[80px] w-[80px] flex items-center justify-center bg-green-800 rounded-lg ">
          <img src={plant1} alt="" className=" w-[200px]" />
        </div>
        <div className=" h-[80px] w-[80px] flex items-center justify-center bg-green-800 rounded-lg ">
          <img src={plant2} alt="" className=" w-[250px]" />
        </div>
        <div className=" h-[80px] w-[80px] flex items-center justify-center bg-green-800 rounded-lg ">
          <img src={plant3} alt="" className=" w-[260px]" />
        </div>
        <div className=" h-[80px] w-[80px] flex items-center justify-center bg-green-800 rounded-lg ">
          <img src={plant4} alt="" className=" w-[260px]" />
        </div>
        <div className=" h-[80px] w-[80px] flex items-center justify-center bg-green-800 rounded-lg ">
          <img src={plant5} alt="" className=" w-[260px]" />
        </div>
        <div className=" h-[80px] w-[80px] flex items-center justify-center bg-green-800 rounded-lg ">
          <img src={plant6} alt="" className=" w-[260px]" />
        </div>
        <div className=" h-[80px] w-[80px] flex items-center justify-center bg-green-800 rounded-lg ">
          <img src={plant7} alt="" className=" w-[260px]" />
        </div>
        <div className=" h-[80px] w-[80px] flex items-center justify-center bg-green-800 rounded-lg ">
          <img src={plant8} alt="" className=" w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default Favourites;
