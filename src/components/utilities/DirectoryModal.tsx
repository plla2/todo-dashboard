import { useState } from "react";
import Modal from "./Modal";
import { useAppSelector } from "../../store/hooks";
interface Props {
  onClose: () => void;
  dirName?: string;
  onConfirm: (newDirName: string) => void;
  btnText: string;
  title: string;
}

const DirectoryModal = (props: Props) => {
  const directories = useAppSelector((store) => store.tasks.directories);

  const [newDirName, setNewDirName] = useState<string>("");
  const [errorDirName, setErrorDirName] = useState<boolean>(false);

  const checkDirNameExist = (value: string) => {
    const dirNotExist = directories.every((dir: string) => dir !== value);
    if (dirNotExist || props.dirName === value) {
      setErrorDirName(false);
    } else {
      setErrorDirName(true);
    }
  };

  const confirmDirName = (e: React.MouseEvent) => {
    e.preventDefault();
    if (errorDirName) return;
    props.onConfirm(newDirName);
    props.onClose();
  };

  console.log(newDirName);
  return (
    <>
      <div>
        <Modal onClose={props.onClose} title={props.title}>
          <form>
            <div>
              <label htmlFor="dir-name">Title</label>
              <input
                type="text"
                name="dir-name"
                id="dir-name"
                placeholder="폴더 이름을 입력해주세요."
                value={newDirName}
                onChange={({ target }) => setNewDirName(target.value)}
                onInput={({ currentTarget }) =>
                  checkDirNameExist(currentTarget.value)
                }
              />
              {errorDirName && <div>이미 존재하는 폴더입니다!!</div>}
            </div>
            <button onClick={confirmDirName}>{props.btnText}</button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default DirectoryModal;
