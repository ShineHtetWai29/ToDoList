import React from "react"
import Task from "./pages/TaskPage/Task"
import Home from "./pages/HomePage/Home"
import Categories from "./pages/CategoriesPage/Categories"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>

      {/* <Task/> */}
      {/* <Categories/> */}
      {/* <Route/> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/task" element={<Task/>} />
            <Route path="/categories" element={<Categories/>} />
        </Routes>
    </BrowserRouter>
    </>
      
    
  )
}

export default App
