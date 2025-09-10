import React from 'react'
import {useForm} from 'react-hook-form'
import { toast, ToastContainer} from 'react-toastify'

function UpdateStudent({id,first_name,last_name,age,refreshStudents}) {

   const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
        first_name,last_name,age
    }
   })

   const onSubmit=(data)=>{
    console.log(data);
    fetch(`http://127.0.0.1:8000/api/students/${id}/`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)

    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res,"updated");
        toast.success("Student updated")
        refreshStudents()
    });
    
   }

  return (
<div class="modal fade" id={`modal${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Student</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <form action="" onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">First name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('first_name')}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

         <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Last  name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('last_name')}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

         <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Age</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('age')}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <input type="submit" className='btn btn-primary' />

      </form>

      <ToastContainer/>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default UpdateStudent