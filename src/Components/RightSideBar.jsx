import RecentActivities from "./RecentActivities"
import TopHero from "./TopHero"


const RightSideBar = () => {
  return (
    <div className=" ml-[2px] h-screen w-[290px] mt-[1px] p-3 bg-white ">
      <TopHero />
      <RecentActivities />
    </div>
  )
}

export default RightSideBar
