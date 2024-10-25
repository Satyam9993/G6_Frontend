import React from 'react'
import NameEditForm from '../components/NameEditForm'
import EmailEditForm from '../components/EmailEditForm'
import PasswordForm from '../components/PasswordFrom'
import { useNavigate } from 'react-router-dom'


const ProfilePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='min-h-dvh'>
                <div className="block h-[100vh] md:flex justify-center items-center">

                    <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white">
                        <div className="w-full h-auto mx-2 flex justify-center">
                            <img id="showImage" className="max-w-xs items-center" src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-6359.jpg?ga=GA1.1.90537765.1677043202&semt=ais_hybrid" alt="imgae" />
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4">
                        <div className="rounded  shadow p-6">
                            <NameEditForm />
                            <EmailEditForm />
                            <PasswordForm />
                            <button className="w-[97%] bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                Delete Account
                            </button>
                            <button onClick={()=>navigate("/")} className="w-[97%] mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Back
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ProfilePage
