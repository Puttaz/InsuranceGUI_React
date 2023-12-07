import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Index from './Index'
import Users from './User/Users'
import CreateUser from './User/CreateUser'
import UpdateUser from './User/UpdateUser'
import Policies from './Policy/Policies'
import CreatePolicy from './Policy/CreatePolicy'
import PolicyHolder from './PolicyHolder/PolicyHolder'
import HealthProvider from './HealthProvider/HealthProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/index' element = {<Index />}></Route>
          <Route path='/viewusers' element = {<Users />}></Route>
          <Route path='/createuser' element = {<CreateUser />}></Route>
          <Route path='/updateuser/:id' element = {<UpdateUser />}></Route>
          <Route path='/viewpolicies' element = {<Policies />}></Route>
          {/*<Route path='/createpolicy' element = {<CreatePolicy />}></Route>
          <Route path='/updatepolicy/:id' element = {<UpdatePolicy />}></Route> 
          <Route path='/viewclaim' element = {<CreateUser />}></Route>*/}
          <Route path='/viewuproviders' element = {<HealthProvider />}></Route>
          <Route path='/viewpolicyholders' element = {<PolicyHolder />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
