import React, { useEffect, useState } from 'react'
import UpdateStudent from './UpdateStudent'

function Allstudents() {
 const [students,setStudent]=useState(null)
 const fetchStudents=()=>{
     fetch('http://127.0.0.1:8000/api/students/')
     .then(res=>res.json())
     .then(data=>setStudent(data))
 }

 const deleteStudent=(studentId)=>{

   fetch(`http://127.0.0.1:8000/api/students/${studentId}/`,{
    method:"DELETE"
   }).then(res=>{
       console.log("Product deleted");
       fetchStudents();
       
   })

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
    {students && students.map((s)=><><tr>
      <th scope="row">{s.id}</th>
      <td>{s.first_name}</td>
      <td>{s.last_name}</td>
      <td>{s.age}</td>
      <td>
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target={`#modal${s.id}`}>
        Update
       </button></td>
      <td><button className='btn btn-danger' onClick={()=>deleteStudent(s.id)}>Delete</button></td>

    </tr>
    <UpdateStudent id={s.id} 
    first_name={s.first_name} 
    last_name={s.last_name} 
    age={s.age}
    refreshStudents={fetchStudents}/>
    </>)}

    
    
  </tbody>
</table>
    </div>
  )
}

export default Allstudents