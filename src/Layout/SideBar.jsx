import { Logo } from "../Components/Logo"
import Navigation from "../Components/Navigation"


export const SideBar = () => {
  return (
    <div>
        <div className=" max-w-[250px] lg:block h-screen xl:block md:hidden lgp:block xxlg:block sm:hidden overflow-hidden xxs:hidden ss:hidden xs:hidden  w-[220px] bg-white p-1 pl-3">
            <Logo />
              <br></br>
              <Navigation />
        </div>
    </div>
  )
}
