import { useTask } from "../../providers/Task"
import { StyledList, StyledSpan } from "./style"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { Modal } from "../Modal"

export const TaskList = () => {
  const { tasksList, removeTask, checkTask, taskListComplete } = useTask()
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const [oldName, setOldName] = useState('')

  const backToStart = () => {
    navigate('/')
  }

  const edit = (name: string) => {
    setOldName(name)
    setModal(true)
  }

  return (
    <>
      <Modal modal={modal} setModal={setModal} taskName={oldName}/>
      <StyledSpan onClick={backToStart}>
        &lt;
      </StyledSpan>
      <StyledList>
        {tasksList?.map(el => 
          <div className='container'>
            <h1>{el.name}</h1>
            <div>
              <i className="fas fa-trash" onClick={() => removeTask(el.name)}></i>
              <i className="fas fa-edit" onClick={() => edit(el.name)}></i>
              <i className="fas fa-check" onClick={() => checkTask(el.name)}></i>
            </div>
          </div>
        )}
      </StyledList>
      <StyledList>
        {taskListComplete.map(el => 
          <div className='container'>
            <h1 style={{textDecoration: 'line-through'}}>{el.name}</h1>
          </div>  
        )}
      </StyledList>
    </>
  )
}