import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../interface";

const defaultTask: Task[] = [
  {
    title: "할일 1",
    description: "할 내용을 적어주세요.",
    date: "2023-12-15",
    dir: "Main",
    important: false,
    completed: false,
    id: "Task1",
  },
];

const getSavedDir = (): string[] => {
  let dirList: string[] = [];
  if (localStorage.getItem("dirs")) {
    dirList = JSON.parse(localStorage.getItem("dirs")!);
    const existDir = dirList.some((dir: string) => dir === "Main");
    if (!existDir) {
      dirList.push("Main");
    }
  } else {
    dirList.push("Main");
  }

  if (localStorage.getItem("tasks")) {
    const savedTasksList = JSON.parse(localStorage.getItem("tasks")!);
    const dirNotSaved: string[] = [];
    savedTasksList.forEach((task: Task) => {
      if (!dirList.includes(task.dir)) {
        if (!dirNotSaved.includes(task.dir)) {
          dirNotSaved.push(task.dir);
        }
      }
    });
    dirList = [...dirList, ...dirNotSaved];
  }
  return dirList;
};

const initialState: {
  tasks: Task[];
  directories: string[];
} = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")!)
    : defaultTask,
  directories: getSavedDir(),
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<Task>) {
      state.tasks = [action.payload, ...state.tasks];
    },
    addNewDir(state, action: PayloadAction<string>) {
      state.directories = [action.payload, ...state.directories];
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;
