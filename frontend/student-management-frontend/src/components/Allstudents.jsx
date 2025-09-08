import React, { useEffect, useState } from 'react'

function Allstudents() {
 const [students,setStudent]=useState(null)
 const fetchStudents=()=>{
     fetch('http://127.0.0.1:8000/api/students/')
     .then(res=>res.json())
     .then(data=>setStudent(data))
 }


 useEffect(()=>{
    fetchStudents();
 },[])
  return (
    <div>


        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">age</th>

      <th scope="col">Action</th>
      <th scope="col">Action</th>


    </tr>
  </thead>
  <tbody>
    {students && students.map((s)=><tr>
      <th scope="row">{s.id}</th>
      <td>{s.first_name}</td>
      <td>{s.last_name}</td>
      <td>{s.age}</td>
      <td><button className='btn btn-success'>Update</button></td>
            <td><button className='btn btn-danger'>Delete</button></td>

    </tr>)}

    
    
  </tbody>
</table>
    </div>
  )
}

export default Allstudents