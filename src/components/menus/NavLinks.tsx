import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "오늘의 할 일",
    path: "/today",
  },
  {
    name: "모든 할 일",
    path: "/",
  },
  {
    name: "중요한 할 일",
    path: "/important",
  },
  {
    name: "완료된 할 일",
    path: "/completed",
  },
  {
    name: "미완료된 할 일",
    path: "/Uncompleted",
  },
];

const NavLinks = () => {
  const route = useLocation();
  const currentPath = route.pathname;
  return (
    <nav>
      <ul className="navLinks">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`link ${
                currentPath === link.path ? "classActive" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
