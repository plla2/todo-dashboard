import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import DirectoryModal from "../../utilities/DirectoryModal";
import { tasksActions } from "../../../store/Tasks.store";

const ContentsDirectories = () => {
  const directories = useAppSelector((store) => store.tasks.directories);
  const dispatch = useAppDispatch();
  const [dirModalIsShow, setDirModalIsShow] = useState(false);

  const dirModalToggle = () => {
    setDirModalIsShow(true);
  };

  const closeModalDirectories = () => {
    setDirModalIsShow(false);
  };

  const createNewDir = (inputValue: string) => {
    const newDirectory = inputValue.trim();
    if (newDirectory.length === 0) return;
    const directoryNoExist = directories.every((dir) => dir !== newDirectory);
    if (directoryNoExist) {
      dispatch(tasksActions.addNewDir(newDirectory));
    }
  };
  console.log(directories);
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
