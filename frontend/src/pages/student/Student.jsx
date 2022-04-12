import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './student.scss'

const Student = () => {

  const [data,setData]=useState([])

  useEffect(()=>{ (
    async()=> {
    const url='http://localhost:8000/student_books/'
    const res= await axios.get(url)

    setData(res.data)
    
  })()
  },[])
  return (
    <div className='student'>
      <Navbar />
      <div className="booksDetails">
        <div className="heading">
          Available Books
        </div>
        <div className="table">
          <table border='2px' cellSpacing='0' cellPadding='4px'>
            <thead>
              <th>Name</th>
              <th>ISBN</th>
              <th>Author</th>
              <th>Category</th>
            </thead>
            <tbody>
            {data? data.map(item=>{
              return  <tr key={item.book_id}>
                <td >{item.name}</td>
                <td >{item.isbn}</td>
                <td >{item.author}</td>
                <td >{item.category}</td>
              
            </tr>
            }):""
           }</tbody>
            
          </table>
        </div>
      </div>
    </div>
  )
}

export default Student