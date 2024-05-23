import { Navigate, Route, Routes } from 'react-router';
import './App.css'
import Layout from './Layout.jsx'
import ComponetRoot from './components/ComponetRoot.jsx'
import { useEffect, useState } from 'react';
import { auth } from './Firebase.js';


const {
  Login,
  Register,
  Profile,
  Home,
  CheckOut,
  NotFound,
} = ComponetRoot;

function App() {

  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element=<Layout />>
          <Route path='/' element={user ? <Navigate to='/profile' /> : <Login />} />
          <Route path='login/' element={<Login />} />
          <Route path='register/' element={<Register />} />
          <Route path='profile/' element={<Profile />} />
          <Route path='Home/' element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
