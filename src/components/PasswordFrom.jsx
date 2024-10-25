import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { CiEdit } from "react-icons/ci";

// Validation schema using Yup
const PasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Current password is required'),
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('New password is required'),
});

const PasswordForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Formik
      initialValues={{ currentPassword: '', newPassword: '' }}
      validationSchema={PasswordSchema}
      onSubmit={(values) => {
        console.log(values);
        setIsEditing(false);
      }}
    >
      {({ errors, touched, handleSubmit, handleReset }) => (
        <Form>
          <div className="pb-4">
            <label htmlFor="password" className="font-semibold text-gray-700 block pb-1">
              Password
            </label>
            <div className="flex items-center">
              {!isEditing ? (
                <>
                  <input
                    disabled
                    id="password"
                    className="rounded-r px-4 py-2 w-full border border-gray-300"
                    type="password"
                    value="******"
                  />
                  <CiEdit
                    className="ml-2 cursor-pointer text-gray-800"
                    onClick={() => setIsEditing(true)}
                  />
                </>
              ) : (
                <div className="w-full">
                  <label htmlFor="currentPassword" className="block text-sm text-gray-700">
                    Current Password
                  </label>
                  <Field
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    className="rounded-r px-4 py-2 w-full border border-gray-300 mb-2"
                  />
                  {errors.currentPassword && touched.currentPassword ? (
                    <div className="text-red-500 text-sm">{errors.currentPassword}</div>
                  ) : null}

                  <label htmlFor="newPassword" className="block text-sm text-gray-700">
                    New Password
                  </label>
                  <Field
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className="rounded-r px-4 py-2 w-full border border-gray-300 mb-2"
                  />
                  {errors.newPassword && touched.newPassword ? (
                    <div className="text-red-500 text-sm">{errors.newPassword}</div>
                  ) : null}

                  <div className="flex space-x-4 mt-4">
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      onClick={handleSubmit}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                      onClick={() => {
                        handleReset(); // Reset form values
                        setIsEditing(false); // Cancel editing
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PasswordForm;
