import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Lists } from '../pages/Lists' 

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/lists' element={<Lists/>} />
    </Routes>
  )
}