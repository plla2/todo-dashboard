import "./layoutmenus.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const LayoutMenus = (props: Props) => {
  return <div className="menu">{props.children}</div>;
};

export default LayoutMenus;
