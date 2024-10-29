import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters'),
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    }),
    onSubmit: async (values) => {
      try {
        const data = await fetch(`${BACKEND_URL}/register`,
          {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
          }
        );
        const register = await data.json();
        console.log("register", register)
        if (register.status == 200) {
          toast.info("User is create successfully!");
          navigate("/login");
        }else{
          toast.error(register.message || "Someting went wrong");
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-800">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className={`w-full border ${formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            autoComplete="off"
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-500">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className={`w-full border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            autoComplete="off"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-800">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={`w-full border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            autoComplete="off"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Register</button>
      </form>
      <div className="mt-6 text-green-500 text-center">
        Already have an account? <Link to="/login" className="hover:underline"> Login</Link>
      </div>
    </div>
  );
}

export default Register;

