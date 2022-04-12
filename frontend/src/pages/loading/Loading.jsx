import React from 'react'
import { Link } from 'react-router-dom'
import './loading.scss'

const Loading = () => {
  return (
    <div className="lApp">
     
    <div className='loading'>
      <p className='loading_para'>Welcome to Book Management System,<br /> Please Sign In ! </p>
      <div >

        <Link to='/login'  >
          <button className='button'>Admin</button>
          </Link>
        <Link to='/student'>
       <button className='button'>Student</button>

        </Link>
       
       
      
      </div>
    </div>
    </div>
  )
}

export default Loading