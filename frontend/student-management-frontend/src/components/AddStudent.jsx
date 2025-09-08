import React from 'react'
import {useForm} from 'react-hook-form'

function AddStudent() {

  const {register,
    handleSubmit,
    formState:{errors}}=useForm();

    const onSubmit=(data)=>{
      console.log("Form submitted",data);

      fetch("http://127.0.0.1:8000/api/students/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      
    }

  return (
    <div className='container m-4 p-3 border border-secondary'>
      <h1 className='text-center bg-warning p-3'>Add Student</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">First name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('first_name',{required :"first name is required"})}/>

            {errors.first_name &&<div id="emailHelp" className="form-text text-danger">{errors.first_name.message}</div> }

        </div>

         <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Last  name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('last_name',{required:"last name is required"})}/>
          
          {errors.last_name && <div id="emailHelp" className="form-text text-danger">
            {errors.last_name.message}</div>}
        </div>

         <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Age</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('age',{required:"age is required"})}/>
            {errors.age && <div id="emailHelp" className="form-text text-danger">{errors.age.message}</div>} 
        </div>

        <input type="submit" className='btn btn-primary' />

      </form>
    </div>
  )
}

export default AddStudent