import { plant1, plant2, plant4, plant8 } from "../assets";
import { Items } from "./Items";

const RecentActivities = () => {
  return (
    <div className=" mt-3">
     <h3 className="text-gray-800 nunito font-semibold"> Recent activities</h3>
     <Items image={plant1} text1="Hogwart Plant" text2="succesful" text3="$270"/>
     <Items image={plant2} text1="Spring  Plant" text2="succesful" text3="$120"/>
     <Items image={plant8} text1="Fuax Pearls  Plant" text2="succesful" text3="$460"/>
     <Items image={plant4} text1="Potter's Ivy Plant" text2="succesful" text3="$90"/>
    </div>
  );
}

export default RecentActivities;
