import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LayoutOne } from './layouts/LayoutOne'
import { Home } from './pages/Home'
import { SignUpPage } from './pages/SignUpPage'
import app from './firebase.config'
import { ToDo } from './components/todo/ToDo'
import { ToDoPage } from './pages/ToDoPage'
import { LoginPage } from './pages/LoginPage'
import { LayoutTwo } from './layouts/LayoutTwo'
import { ToastContainer } from 'react-toastify'
import { ResetPassword } from './components/login/ResetPassword'
function App() {
   const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne />}>
          <Route index element={<Home />}/>
        </Route>
        <Route path='/LayoutTwo' element={<LayoutTwo />}>
          <Route path='/LayoutTwo/todo' element={<ToDoPage />}/>
        </Route>
        <Route path='/signUpPage' element={<SignUpPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/forget' element={<ResetPassword />}/>
      </Route>
    )
   )

  return (
    <>
       <RouterProvider router={route}/>
       <ToastContainer />
    </>
  )
}

export default App
