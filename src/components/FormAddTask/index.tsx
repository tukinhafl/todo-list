import { StyledButton, StyledForm, StyledInput, StyledSpan } from "./style"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useTask } from "../../providers/Task"

export const FormAddTask = () => {
  const navigate = useNavigate()
  const [task, setTask] = useState('')
  const { addTask } = useTask()

  const goToTaskList = () => {
    navigate('/lists')
  }

  return (
    <>
      <StyledSpan onClick={goToTaskList}>
        &gt;
      </StyledSpan>
      <StyledForm>
        <div>
          <StyledInput 
            placeholder='Digite sua tarefa'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <StyledButton onClick={() => addTask(task)}>
            +
          </StyledButton>
        </div>
      </StyledForm>
    </>
  )
}