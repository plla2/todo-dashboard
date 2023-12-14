import NavLinks from "./NavLinks";
import "./menu.scss";

const Menu = () => {
  return (
    <header className="header">
      <h1 className="title">Todo</h1>
      <NavLinks />
    </header>
  );
};

export default Menu;
