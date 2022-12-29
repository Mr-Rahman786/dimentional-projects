import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const { creatUser } = useContext(AuthContext)
    const handleLogin = (data) => {
        console.log(data)
        creatUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
        .catch(error=>console.error(error))
    }

    return (
        <div className=''>
            <div className='body'>
                <div className='box'>
                    <form onSubmit={handleSubmit(handleLogin)} className="form">
                        <h2>Sign In</h2>
                        <div className="inputBox">
                            <input
                                {...register("email",
                                    { required: true })}
                                type="email" name="email" id="" />
                            <span> Enter Your Email</span>
                            {errors.email && <p className='text-white' role="alert">{errors.email?.message}</p>}
                            <i></i>

                        </div>
                        <div className="inputBox">
                            <input

                                {...register("password",
                                    { required: true })}
                                type="password" name="password" id="" />
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