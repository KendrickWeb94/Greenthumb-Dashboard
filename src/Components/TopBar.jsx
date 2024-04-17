import {
  BellOutlined,
  FilterOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { user2 } from "../assets";

const TopBar = () => {
  return (
    <div className="w-full h-auto p-1 bg-white">
      <div className="flex items-center pr-5 pl-5 cursor-pointer justify-between">
        <div className=" w-[350px] flex items-center justify-between border rounded-md border-black-300/95 px-2 h-[30px]">
          <div className="flex items-center gap-2">
            <i className="bx bx-search text-green-800 text-base"></i>
            <input
              placeholder="Search"
              className="nunito w-full text-sm focus:no-underline border-0 outline-none font-medium text-green-800"
            ></input>
          </div>
          <FilterOutlined className="text-green-800 text-base" />
        </div>
        <div className="flex items-center gap-3">
          <span className="p-1 flex items-center  border hover:bg-green-800 transition-all ease-in-out delay-500 duration-500   text-white rounded-md border-black-300/95 px-2 ">
            <ShoppingCartOutlined className=" text-gray-700 hover:text-white  transition-all ease-in-out delay-50 duration-500 text-base text-center -translate-y-[2px] -translate-x-[1px]" />
          </span>
          <span className="p-1 flex items-center hover:bg-green-800 transition-all ease-in-out delay-500 duration-500  border rounded-md border-black/10 px-2 ">
            <BellOutlined className=" text-gray-700 text-base text-center  hover:text-white  transition-all ease-in-out delay-50 duration-500 -translate-y-[2px] -translate-x-[1px]" />
          </span>

          <img
            src={user2}
            alt=""
            className=" w-8 rounded-md object-cover h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
