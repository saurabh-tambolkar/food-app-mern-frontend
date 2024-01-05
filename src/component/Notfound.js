import React from 'react'
import { Link } from 'react-router-dom';
import Illu from "../component/illus1.png"

function Notfound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{backgroundColor:'#252525',width:"100vw",height:"100vh"}}>
        <h1 className='not-found-404' style={{fontSize:'200px'}}>404</h1>
      <h1 className='fs-5 '>Page not found</h1>
      <Link className="btn btn-primary m-5" to='/'>Go to Home</Link>
    </div>
  )
}

export default Notfound
