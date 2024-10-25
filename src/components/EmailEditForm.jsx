import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Importing icons
import { CiEdit } from "react-icons/ci";
import { useSelector } from 'react-redux';
const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const EmailEditForm = ({updateUserInformation}) => {
  const [isEditing, setIsEditing] = useState(false);
  const email = useSelector(state => state.user.email);
  return (
    <Formik
      initialValues={{ email: email }}
      validationSchema={EmailSchema}
      onSubmit={async (values) => {
        await updateUserInformation({email : values.email});
        setIsEditing(false);
      }}
    >
      {({ errors, touched, handleSubmit, handleReset }) => (
        <Form>
          <div className="pb-4">
            <label htmlFor="email" className="font-semibold text-gray-700 block pb-1">
              Email
            </label>
            <div className="flex items-center">
              <Field
                id="email"
                name="email"
                className="rounded-r px-4 py-2 w-full border border-gray-300"
                type="email"
                disabled={!isEditing} // Disable input if not editing
              />
              {!isEditing ? (
                <CiEdit
                  className="ml-2 cursor-pointer text-gray-800"
                  onClick={() => setIsEditing(true)} // Enable editing on click
                />
              ) : (
                <>
                  <FaCheck
                    className="ml-2 cursor-pointer text-green-600"
                    onClick={handleSubmit} // Submit form
                  />
                  <FaTimes
                    className="ml-2 cursor-pointer text-red-600"
                    onClick={() => {
                      handleReset(); // Reset form values
                      setIsEditing(false); // Cancel editing
                    }}
                  />
                </>
              )}
            </div>
            {errors.email && touched.email ? (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            ) : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EmailEditForm;
