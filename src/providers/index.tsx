import { IProviderProps } from "../types"
import { TaskProvider } from "./Task"

export const Providers = ({ children }: IProviderProps) => {
  return (
    <TaskProvider>
      {children}
    </TaskProvider>
  )
}