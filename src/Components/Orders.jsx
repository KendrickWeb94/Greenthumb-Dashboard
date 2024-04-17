/* eslint-disable react/prop-types */
import { RightOutlined } from "@ant-design/icons";
import { dashboard1, dashboard4, dashboard5, dashboard6 } from "../assets";

// eslint-disable-next-line react/prop-types
export const Orders = () => {
  return (
    <div className="grid grid-cols-4 mb-5 mt-5 gap-4">
      <div className="  relative h-[180px] rounded-lg w-[150px] object-cover overflow-hidden">
        <img src={dashboard1} className=" object-cover" />
        <span className=" p-2 px-2 bg-green-800 top-0 flex items-center justify-center right-0 absolute mr-4 mt-1 rounded-lg ">
          <RightOutlined className=" font-bold text-white" />
        </span>
        <span className="absolute bottom-0 w-full text-xs font-bold flex items-center nunito h-[25px] justify-center bg-green-800/45 backdrop:bg-green-800 text-white">
          <p>Swiss Chess Plant</p>
        </span>
      </div>
      <div className="  relative h-[180px] rounded-lg w-[150px] object-cover overflow-hidden">
        <img src={dashboard6} className=" object-cover" />
        <span className=" p-2 px-2 bg-green-800 top-0 flex items-center justify-center right-0 absolute mr-4 mt-1 rounded-lg ">
          <RightOutlined className=" font-bold text-white" />
        </span>
        <span className="absolute bottom-0 w-full text-xs font-bold flex items-center nunito h-[25px] justify-center bg-green-800/45 backdrop:bg-green-800 text-white">
          <p>ZZ Plant</p>
        </span>
      </div>
      <div className="  relative h-[180px] rounded-lg w-[150px] object-cover overflow-hidden">
        <img src={dashboard4} className=" object-cover h-full w-full" />
        <span className=" p-2 px-2 bg-green-800 top-0 flex items-center justify-center right-0 absolute mr-4 mt-1 rounded-lg ">
          <RightOutlined className=" font-bold text-white" />
        </span>
        <span className="absolute bottom-0 w-full text-xs font-bold flex items-center nunito h-[25px] justify-center bg-green-800/45 backdrop:bg-green-800 text-white">
          <p>String Of Pearls</p>
        </span>
      </div>
      <div className="  relative h-[180px] rounded-lg w-[150px] object-cover overflow-hidden">
        <img src={dashboard5} className=" object-cover h-full w-full" />
        <span className=" p-2 px-2 bg-green-800 top-0 flex items-center justify-center right-0 absolute mr-4 mt-1 rounded-lg ">
          <RightOutlined className=" font-bold text-white" />
        </span>
        <span className="absolute bottom-0 w-full text-xs font-bold flex items-center nunito h-[25px] justify-center bg-green-800/45 backdrop:bg-green-800 text-white">
          <p>Faux Picox Plant</p>
        </span>
      </div>
    </div>
  );
};
