import AddTaskBtn from "../utilities/AddTaskBtn";
import LayoutMenus from "../utilities/menuLayout/LayoutMenus";
import NavLinks from "./NavLinks";
import Directories from "./directories/Directories";
import "./menu.scss";

const Menu = () => {
  return (
    <LayoutMenus>
      <header className="header">
        <h1 className="title">Todo</h1>
        <AddTaskBtn />
        <NavLinks />
        <Directories />
      </header>
    </LayoutMenus>
  );
};

export default Menu;
