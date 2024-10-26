import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";
import { useSelector } from 'react-redux';


const NameSchema = Yup.object().shape({
    description: Yup.string()
    .min(10, 'Too Shot!')
    .required('Description is required'),
});

const UserDescription = ({updateUserDescription}) => {
  const [isEditing, setIsEditing] = useState(false);
  const description = useSelector(state => state.user.description);
  return (
    <Formik
      initialValues={{ description: description }}
      validationSchema={NameSchema}
      onSubmit={async (values) => {
        await updateUserDescription({description : values.description});
        setIsEditing(false);
      }}
    >
      {({ values, errors, touched, handleSubmit, handleReset }) => (
        <Form>
          <div className="pb-6">
            <label htmlFor="description" className="font-semibold text-gray-700 block pb-1">
              Description
            </label>
            <div className="flex items-center">
              <Field
                id="description"
                name="description"
                className="rounded-r px-4 py-2 w-full border border-gray-300"
                as="textarea"
                rows="4"
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
            {errors.description && touched.description ? (
              <div className="text-red-500 text-sm mt-1">{errors.description}</div>
            ) : null}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserDescription;
