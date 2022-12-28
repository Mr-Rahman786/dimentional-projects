import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className=''>
            <div className='body'>
                <div className='box'>
                    <form onSubmit={handleSubmit(handleLogin)} className="form">
                        <h2>Sign In</h2>
                        <div className="inputBox">
                            <input {...register("email")} type="email" name="email" id="" required />
                            <span> Enter Your Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input {...register("password")} type="password" name="password" id="" required />
                            <span>Enter Password</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <Link>Forget Password</Link>
                            <Link>Signup</Link>
                        </div>
                        <button><input className='w-full text-center text-slate-300' type="submit" value="login" /></button>
                        <div className='text-center mt-5'>
                            <h3 className='text-white'>OR</h3>
                            <button className='text-white btn btn-outline w-full p-4 rounded'>Continue With Google</button>
                        </div>
                    </form>
                    
                </div>
            </div>
    	   
        </div>
    );
};

export default Login;