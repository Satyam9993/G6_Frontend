import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";


const NameSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Name is required'),
});

const NameEditForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Formik
      initialValues={{ name: 'Jane Name' }}
      validationSchema={NameSchema}
      onSubmit={(values) => {
        // TODO OnSubmit Function
        console.log(values);
        setIsEditing(false);
      }}
    >
      {({ values, errors, touched, handleSubmit, handleReset }) => (
        <Form>
          <div className="pb-6">
            <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">
              Name
            </label>
            <div className="flex items-center">
              <Field
                id="name"
                name="name"
                className="rounded-r px-4 py-2 w-full border border-gray-300"
                type="text"
                disabled={!isEditing}
              />
              {!isEditing ? (
                <CiEdit
                  className="ml-2 cursor-pointer text-gray-800"
                  onClick={() => setIsEditing(true)} 
                />
              ) : (
                <>
                  <FaCheck
                    className="ml-2 cursor-pointer text-green-600"
                    onClick={handleSubmit}
                  />
                  <FaTimes
                    className="ml-2 cursor-pointer text-red-600"
                    onClick={() => {
                      handleReset();
                      setIsEditing(false);
                    }}
                  />
                </>
              )}
            </div>
            {errors.name && touched.name ? (
              <div className="text-red-500 text-sm mt-1">{errors.name}</div>
            ) : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NameEditForm;
