import { useState } from "react"
import { useTask } from "../../providers/Task"
import { IModalProps } from "../../types"
import { StyledContainer } from "./style"

export const Modal = ({ modal, setModal, taskName }: IModalProps) => {
  const [newTaskName, setNewTaskName] = useState('')
  const { editTask } = useTask()

  return (
    <StyledContainer modal={modal}>
      <div>
        <span onClick={() => setModal(false)}>X</span>
        <input 
          type="text" 
          placeholder='Novo titulo'
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button onClick={() => editTask(taskName, newTaskName, setModal)}>editar</button>
      </div>
    </StyledContainer>
  )
}