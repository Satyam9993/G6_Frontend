import React from 'react';
import Register from '../components/Register';

const RegisterPage = () => {
    return (
        <>
            <div className="bg-yellow-300 flex justify-center items-center h-screen">
                <div className="w-1/2 h-screen hidden lg:block">
                    <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?t=st=1729787105~exp=1729790705~hmac=1474b4cccdd348e857dcdd9ca47e669bc5b66f87a0d186f88e96aaf72f3913e2&w=740" alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>
                <Register />
            </div>
        </>
    )
}

export default RegisterPage
