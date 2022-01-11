import { ReactNode } from 'react'

export interface IProviderProps {
  children: ReactNode;
}

export interface ITaskProps {
  name: string;
  created_at: number;
  done: boolean;
}

export interface ITaskContextData {
  tasksList: ITaskProps[];
  setTasksList: any;
  addTask: (task: string) => void;
  removeTask: (task: string) => void;
  checkTask: (task: string) => void;
  taskListComplete: ITaskProps[];
  editTask: (taskName: string, newTaskName: string, setModal: (bool: boolean) => void) => void;
}

export interface IModalProps {
  modal: boolean;
  setModal: (bool: boolean) => void;
  taskName: string;
}