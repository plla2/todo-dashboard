import { useState } from "react";
import DirectoryModal from "../../utilities/DirectoryModal";
import { useAppDispatch } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import ModalConfirm from "../../utilities/ModalConfirm";

interface Props {
  dir: string;
}

const ItemDirectory = (props: Props) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(true);
  const dispatch = useAppDispatch();

  const closeEditModalHandler = () => {
    setEditModal(false);
  };

  const closeDeleteModalHandler = () => {
    setDeleteModal(false);
  };

  const deleteDirHandler = () => {
    dispatch(tasksActions.deleteDir(props.dir));
  };

  const confirmModalHandler = (dirName: string) => {
    dispatch(
      tasksActions.editDirName({
        previousDirName: props.dir,
        newDirName: dirName,
      })
    );
  };

  return (
    <>
      {editModal && (
        <DirectoryModal
          onClose={closeEditModalHandler}
          dirName={props.dir}
          onConfirm={confirmModalHandler}
          btnText="Edit"
          title="Edit directory name"
        />
      )}
      {deleteModal && (
        <ModalConfirm
          onClose={closeDeleteModalHandler}
          text="해당 폴더와 할 일들이 삭제됩니다."
          onConfirm={deleteDirHandler}
        />
      )}
    </>
  );
};

export default ItemDirectory;
