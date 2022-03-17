import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className='container-fluid maindivlogin' style={{backgroundColor:'#23a4d3'}}>
        <div className='row  wellcometologin  ' style={{marginTop:'55px'}}>
             Well come
        </div>
        <div className='row textfieldcontainerlogindiv mt-5'>
            <div className='row textfieldcontainerlogin'>
                <div className='textfieldlogindiv mt-5'>

            <input placeholder='Please enter username' type='email' className='col-12 textfieldlogin' />
                </div>
                <div className='textfieldlogindiv'>
            <input placeholder='Please enter login password'  type='password'  className='col-12 textfieldlogin' />
                </div>

            <div className='radiobtnandtextlogin'>

            <input type='radio'style={{marginTop:'6px'}} />
            <p >Remember username/password</p> 
            </div>
            <div className='textfieldlogindiv'>
            <button className='loginbtnloginpage'>Login</button>
            </div>
           <ul >
            <p style={{textDecoration:'none'}}>
                <Link to='/login'>
                Register
                </Link>
                
                </p>
            <p><Link to='#'>Forgot Password?</Link></p>
            <p><Link to='/login' >App Download</Link></p>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Login