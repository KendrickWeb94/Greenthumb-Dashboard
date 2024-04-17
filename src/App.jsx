import Body from "./Layout/Body";
import { SideBar } from "./Layout/SideBar";

const App = () => {
  return (
    <div className="leading-4 flex items-center flex-col justify-center bg-white h-auto">
      <div className="xxl:max-w-[1880px] xl:max-w-[1670px] h-screen overflow-hidden lg:max-w-[1265px] w-full p-1 ">
        <div className="flex gap-[1px]  bg-gray-200">
          <SideBar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default App;
