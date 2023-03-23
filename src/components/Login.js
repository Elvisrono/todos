import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "../components/login.css";

function Login({ setLoggedIn }) {
    const initFormState = {
        username: '',
        password: ''
    }

    const [formState, setFormState] = useState(initFormState);

    const navigate = useNavigate()

    const formChange = (e) => {
        const {name, value } = e.target;
        setFormState((prevState) => ({...prevState, [name]: value}))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setLoggedIn(formState.username);
        setFormState(initFormState);
        localStorage.setItem('user', formState.username);
        navigate('/home');
    }

    return (
        <div className='login-box'>
            <h2><b>Login</b></h2>
            <br></br>
            <h3><b>Welcome to Task Manager</b></h3>
            <br></br>
            <h4><i>Login to create your tasks</i></h4>
            <br></br>
            <form className='formWrapper' onSubmit={handleLogin} autoComplete="off">
                <div className="user-box">
                    <input className='input' type='text' name='username' placeholder='Username' value={formState.username} onChange={formChange} required />
                </div>
                <br></br>
                <div className="user-box">
                    <input className='input' type='password' name='password' placeholder='Password' value={formState.password} onChange={formChange} required />
                </div>
                <br></br>
                <div className="button-form">
                    <button id='formBtn' type='submit'>LOGIN</button>
                    <div className='register'>
                        <p className='signup'><h5>Don't have an account?</h5><br />
                            <a id='signupLink' href='/users/new' >Register</a></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
