import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/userSlice';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const BACKEND_URL = "http://localhost:8080/api/v1";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email()
        .required('email is required'),
      password: Yup.string()  
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const data = await fetch(`${BACKEND_URL}/login`,
          {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
          }
        );
        const login = await data.json();
        if (login) {
          dispatch(setToken({
            userId: login.userId,
            token: login.token
          }));
          navigate("/");
          toast.success("Successfully logged In");
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full border ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-800">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={`w-full border ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3 focus:outline-none focus:border-blue-500`}
            autoComplete="off"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">
          Login
        </button>
      </form>

      <div className="mt-6 text-green-500 text-center">
        <Link to="/register" className="hover:underline">Sign up Here</Link>
      </div>
    </div>
  );
};

export default LoginForm;
