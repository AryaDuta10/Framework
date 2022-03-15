import React from 'react';
import './Register.css';

const Register =()=>{
    return <body>
        <div className='container'>
    <h1 className='text-p'>FORM RGISTER</h1><br></br>
    <h1 className='text-p'>Tugas Kelompok <br></br> </h1><br></br>
    

    <form>
        <label>Username</label><br></br>
        <input type={'text'}></input><br></br>
        <label>Email</label><br></br>
        <input type={'text'}></input><br></br>
        <label>Nomer HP</label><br></br>
        <input type={'text'}></input><br></br>
        <label>Password</label><br></br>
        <input type={'text'}></input><br></br>
        <label>Confirm Password</label><br></br>
        <input type={'text'}></input><br></br>
        <button>Register</button>
        <a href="/">Login</a>
        
    </form>
    </div>
    </body>
}

export default Register;