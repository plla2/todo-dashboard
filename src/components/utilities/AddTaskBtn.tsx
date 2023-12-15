interface Props {
  className?: string;
}

const AddTaskBtn = (props: Props) => {
  return (
    <>
      <button className={`btn ${props.className}`}>할일 추가하기</button>
    </>
  );
};

export default AddTaskBtn;
