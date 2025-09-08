import React from 'react'

function AddStudent() {
  return (
    <div className='container m-4 p-3 border border-secondary'>
      <h1 className='text-center bg-warning p-3'>Add Student</h1>
      <form action="">

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">First name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

         <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Last  name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

         <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Age</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <input type="submit" className='btn btn-primary' />

      </form>
    </div>
  )
}

export default AddStudent