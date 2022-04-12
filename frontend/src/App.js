
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './pages/loading/Loading';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Student from './pages/student/Student'
import Admin from './pages/admin/Admin'
import Books from './pages/books/Books';
import { useEffect, useState } from 'react';

function App() {

  const [auth,setAuth]=useState(true)

  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);

  return (
  <>
    
    <Routes>
      <Route path='/' element={<Loading/>}/>
      <Route path='/login' element={<Login authentication={()=>setAuth(true)}/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/student' element={<Student/>}/>
      
      
      {auth && (<Route path='/admin' element={<Admin authentication={()=>setAuth(false)}/>}/>)}
      {auth && (<Route path='/books' element={<Books/>}/>) }

      

      
    </Routes>
  
    
  </>
  );
}

export default App;
