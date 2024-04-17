import Body from "./Layout/Body";
import { SideBar } from "./Layout/SideBar";

const App = () => {
  return (
    <div className="leading-4 flex items-center flex-col justify-center bg-white h-auto">
      <div className="max-w-[96%] w-full p-1 overflow-x-hidden ">
        <div className="flex gap-[1px]  bg-gray-200">
          <SideBar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default App;
