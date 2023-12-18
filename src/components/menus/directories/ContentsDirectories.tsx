import { useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import DirectoryModal from "../../utilities/DirectoryModal";

const ContentsDirectories = () => {
  const directories = useAppSelector((store) => store.tasks.directories);
  const [dirModalIsShow, setDirModalIsShow] = useState(false);

  const dirModalToggle = () => {
    setDirModalIsShow(true);
  };

  const closeModalDirectories = () => {
    setDirModalIsShow(false);
  };

  const createNewDir = (inputValue: string) => {};

  return (
    <>
      {dirModalIsShow && (
        <DirectoryModal
          title="Create new directory"
          btnText="Create"
          onClose={closeModalDirectories}
          onConfirm={createNewDir}
        />
      )}
      <ul>
        {directories.map((dir: string) => (
          <button key={dir}>{dir}</button>
        ))}
      </ul>
      <button onClick={dirModalToggle}>+추가</button>
    </>
  );
};

export default ContentsDirectories;
