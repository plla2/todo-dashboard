import LayoutMenus from "../utilities/menuLayout/LayoutMenus";
import NavLinks from "./NavLinks";
import "./menu.scss";

const Menu = () => {
  return (
    <LayoutMenus>
      <header className="header">
        <h1 className="title">Todo</h1>
        <NavLinks />
      </header>
    </LayoutMenus>
  );
};

export default Menu;
