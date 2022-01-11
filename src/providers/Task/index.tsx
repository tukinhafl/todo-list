import { createContext, useContext, useState } from 'react'
import { IProviderProps, ITaskProps, ITaskContextData } from '../../types'

const TaskContext = createContext<ITaskContextData>({} as ITaskContextData)

export const TaskProvider = ({ children }: IProviderProps) => {
    const [tasksList, setTasksList] = useState<ITaskProps[]>([])
    const [taskListComplete, setTaskListComplete] = useState<ITaskProps[]>([])

    const addTask = (task: string) => {
        const newTask = {
            name: task.toLowerCase(),
            created_at: Date.now(),
            done: false,
        }
        setTasksList([...tasksList, newTask])
    }

    const removeTask = (task: string) => {
        const newTaskList = tasksList.filter(el => el.name !== task)
        setTasksList(newTaskList)
    }

    const checkTask = (task: string) => {
        const taskComplete = tasksList.filter(el => el.name === task)
        taskComplete[0].done = true
        setTaskListComplete([...taskListComplete, taskComplete[0]])
        const newTaskList = tasksList.filter(el => el.name !== task)
        setTasksList(newTaskList)
    }

    const editTask = (taskName: string, newTaskname: string, setModal: (bool: boolean) => void) => {
        const tasks = tasksList.filter(el => el.name === taskName)
        tasks[0].name = newTaskname
        const newTaskList = tasksList.filter(el => el.name !== taskName)
        setTasksList([...newTaskList])
        setModal(false)
    }

    return (
        <TaskContext.Provider value={{ tasksList, setTasksList, addTask, removeTask, checkTask, taskListComplete, editTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () => useContext(TaskContext)
