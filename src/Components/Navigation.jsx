import {
  BookOutlined,
  ThunderboltOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  UserOutlined,
  GroupOutlined,
  MessageOutlined,
  LogoutOutlined,
} from "@ant-design/icons";



const Navigation = () => {
  return (
    <div className="mt-5">
      <ul className="text-sm cursor-pointer">
        <li className="nunito  transition-all ease-in-out delay-500 duration-500  hover:translate-x-3 text-green-800 font-semibold flex items-center gap-3">
          <i className="bx bxs-grid-alt text-lg"></i>
          <p>Dashboard</p>
        </li>
        <li className="nunito text-grey-500   hover:translate-x-3 font-medium pt-5 hover:text-green-800 transition-all ease-in-out delay-500 duration-500 flex items-center gap-3">
          <BookOutlined />
          <p>Orders</p>
        </li>
        <li className="nunito font-medium    hover:translate-x-3 text-grey-500 pt-7 flex items-center gap-3  hover:text-green-800 transition-all ease-in-out delay-500 duration-500">
          <ThunderboltOutlined />
          <p>Explore</p>
        </li>
        <li className="nunito font-medium   hover:translate-x-3 text-grey-500 pt-7 flex items-center gap-3  hover:text-green-800 transition-all ease-in-out delay-500 duration-500">
          <ShoppingCartOutlined />
          <p>Cart</p>
        </li>
        <li className="nunito font-medium text-grey-500 pt-7 flex items-center gap-3  hover:text-green-800 transition-all ease-in-out delay-500 duration-500">
          <SettingOutlined />
          <p>Settings</p>
        </li>
        <li className="nunito font-medium   hover:translate-x-3 text-grey-500 pt-7 flex items-center gap-3  hover:text-green-800 transition-all ease-in-out delay-500 duration-500">
          <UserOutlined />
          <p>Profile</p>
        </li>
        <li className="nunito font-medium   hover:translate-x-3 text-grey-500 pt-7 flex items-center gap-3  hover:text-green-800 transition-all ease-in-out delay-500 duration-500">
          <GroupOutlined />
          <p>Community</p>
        </li>
        <li className="nunito   hover:translate-x-3 font-medium text-grey-500 pt-7 flex items-center gap-3  hover:text-green-800 transition-all ease-in-out delay-500 duration-500">
          <MessageOutlined />
          <p>Blog</p>
        </li>
      </ul>
      <li className="nunito font-medium text-red-400 pt-14 flex items-center gap-3 hover:cursor-pointer hover:text-red-600  hover:translate-x-3 transition-all ease-in-out delay-500 duration-500">
        <LogoutOutlined />
        <p>Log Out</p>
      </li>
    </div>
  );
};

export default Navigation;
