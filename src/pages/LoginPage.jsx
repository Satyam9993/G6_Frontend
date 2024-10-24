import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import Register from '../components/Register.jsx';

const LoginPage = () => {
    const token = false;
    return (
        <>
            <div className="bg-yellow-300 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?t=st=1729782666~exp=1729786266~hmac=ae07c5ca8f665f8b72ebef2c603f4551068044f6dd15bc4df9ca1112f13aa9b4&w=740" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                    <LoginForm /> 
            </div>
        </>
    )
}

export default LoginPage
