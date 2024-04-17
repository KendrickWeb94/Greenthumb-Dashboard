import { Dashvid } from "../assets";
import Favourites from "./Favourites";
import { Orders } from "./Orders";
import RightSideBar from "./RightSideBar";

import  { useRef } from 'react';


const CenterPage = () => {

    const videoRef = useRef(null);
  
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
  return (
   <div className="flex ">
     <div className="h-screen p-3 bg-white mt-[1px] w-[750px]">
      <div>
        <h1 className="nunito text-xl text-green-800 font-bold">Welcome back!</h1>
        <p className="mt-1 text-gray-400 mb-2 text-sm">Hello Stephanie! shop some of our newest plants </p>
        <div className="max-h-[80px] relative w-full rounded-md overflow-hidden bg-center bg-cover" style={{background: Dashvid, }}>
        <video
    ref={videoRef}
    src={Dashvid}
    autoPlay
    loop
    muted
    onClick={playVideo}
    className=" " 
  ></video>
  <div className="w-full z-50 bg-gray-300/45  backdrop:bg-gray-400 absolute bottom-0 flex items-center justify-center h-[35px] nunito text-white text-sm space-x-1">The  Worlds  First Best Selling Plant Shop</div>
    </div>
      </div>
      <div className=" flex items-center justify-between mt-5 cursor-pointer">
        <h1 className="nunito font-bold text-gray-800">My Orders</h1>
        <p className="nunito font-medium text-sm text-gray-500">View All</p>
      </div>
      <div className="mt-2">
       <Orders text="Swiss Chess Plant" />
       <Favourites />
      </div>
    </div>
    <RightSideBar/>
   </div>
  );
}

export default CenterPage;
