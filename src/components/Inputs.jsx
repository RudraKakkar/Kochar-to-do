import React from 'react'

const Inputs = () => {
  return (
    <div className='row'>

    
    <div className='col-5'>
        
    <input type="text" className="form-control" placeholder="Task" aria-label="Username" aria-describedby="basic-addon1"/>
  </div>
  
  <div className='col-5'>
    <input type="text" className="form-control" placeholder="Description" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  </div>

  <div className='col-1 '><button className='btn btn-success'>Submit</button></div>
  </div>
  )
}

export default Inputs