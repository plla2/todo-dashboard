import { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import ContentsDirectories from "./ContentsDirectories";

const Directories = () => {
  const [isDirectoriesOpen, setIsDirectoriesOpen] = useState<boolean>(false);

  const isToggleDirectories = () => {
    setIsDirectoriesOpen((prev) => !prev);
  };
  return (
    <div className="directories">
      <button className="openBtn" onClick={isToggleDirectories}>
        <Arrow className={`arrowBtn ${isDirectoriesOpen ? "openDir" : ""}`} />
        Directories
      </button>
      <div className="contents">
        <ContentsDirectories />
      </div>
    </div>
  );
};

export default Directories;
