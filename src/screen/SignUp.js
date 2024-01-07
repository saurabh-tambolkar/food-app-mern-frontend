import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from "../component/Navbar"
import SignUpImg from "../component/illus2.png";
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const [credentials,setCredentials] = useState({
        name:'',
        email:"",
        password:"",
        geolocation:""
    })

    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let data = await fetch("https://food-app-mern-backend-eta.vercel.app/api/createuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:credentials.name,
            email:credentials.email,
            password:credentials.password,
            location:credentials.geolocation})
        })
        let result = await data.json();
        console.log(result);
        console.log(result.name);
        
        if(!result.success){
            alert('Please fill out all fields correctly')
        }
        else{
            alert(`Account created `);
            console.log("registered succesfully");
            navigate('/login');
        }

    }

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

  return (
    <div>
      <Navbar/>
       <div className="signup container-fluid ">

        <div>
            <img src={SignUpImg} className='signup-img' alt="img" width="300px"height="400px" style={{borderRadius:"20px",order:'1',objectFit:"cover"}} />
        </div>

        <form className='form-S'>
            <h2>Sign Up</h2>
            <div className="form-group">
                <label htmlFor="name" >Name</label>
                <input type="text" name='name' value={credentials.name} onChange={onChange} id='name' autoComplete="off" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor='email' >Email address</label>
                <input type="email" onChange={onChange}  name='email' value={credentials.email} id='email' autoComplete="off" placeholder="Enter email"/>
            </div>
            <div className="form-group"  >
                <label htmlFor='pass' >Password</label>
                <div>
                    <input type="password" onChange={onChange}  name='password' value={credentials.password} id='pass' autoComplete="off"  placeholder="Password"/>
                    {/* <i class="far fa-eye-slash" onCa id="togglePassword"></i> */}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor='geolocation' >Address</label>
                <input type="text" name='geolocation' onChange={onChange} value={credentials.geolocation} id='geolocation'  placeholder="geolocation"/>
            </div>
            <button type="submit" className="btn btn-success glow-green btn-h" onClick={handleSubmit}>Sign Up</button>
            <Link to='/login'className='m-3 btn btn-danger btn-h'>Already a user </Link>
        </form>

       </div>
        </div>
  )
}

export default SignUp
