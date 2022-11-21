import React, { useState } from "react"
import '../App.css'
import { useRef } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { toggleActions } from "../store/toggleSlice"
import {Paper} from '@mui/material';
import { loginapi } from "../apiRequests/authapis"

const Login = ({ onFormSwitch }) => {
    const form = useSelector(state => state.toggleReducer.form)
    const dispatch = useDispatch()
    const toggleHandler = () => {
        dispatch(toggleActions.changeform('signup'))
    }
    console.log(form)


    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleSubmit = async(e) => {
        e.preventDefault()
       await loginapi({email:emailRef.current.value,password:passwordRef.current.value})
       
    }
    const paperstyle = { padding: 20, height: '70vh', width: 400, margin: '100px auto',  }
    return (
        <div className="auth-form-container App">
       
            <Paper elevation={3} style={paperstyle} >


                <h2 className="mt-3 text-3xl font-bold"> Login</h2>

                <form className="mt-2 login-form" onSubmit={handleSubmit}>
                    <label   htmlFor='email'>Email</label>
                    <input autoComplete="false"  size='30' ref={emailRef} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
                    <label htmlFor='Password'>Password</label>
                    <input size='30' ref={passwordRef} type='Password' placeholder='Enter your Password' id='password' name='Password' />
                    <button className="btn-login mt-3" type="submit" > Login</button>
                </form>


                <button  className="mt-4 link-btn" onClick={toggleHandler} type="submit"> Don't have an account ? Register</button>

            </Paper>
            
        </div>
    )
}
export default Login