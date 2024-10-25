import React from 'react'
import NameEditForm from '../components/NameEditForm'
import EmailEditForm from '../components/EmailEditForm'
import PasswordForm from '../components/PasswordFrom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../store/userSlice'


const ProfilePage = () => {
    const navigate = useNavigate();
    const BACKEND_URL = "http://localhost:8080/api/v1";
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch();

    const updateUserInformation = async (body) => {
        if (!token) {
            toast.error("Not Autorized!");
            return;
        }
        const response = await fetch(`${BACKEND_URL}/updateuserinfo`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(body)
        });

        const userData = await response.json();

        if (userData.success) {
            toast.success(userData.message);
            await fetchUserInfo();
        } else {
            toast.error(userData.message);
        }
    };

    const fetchUserInfo = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/getuserinfo`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            });

            const userData = await response.json();

            if (userData.success) {
                console.log(userData.user.email);

                dispatch(setUserInfo({
                    userId: userData.user._id,
                    email: userData.user.email,
                    username: userData.user.username
                }));
            } else {
                toast.error(userData.message);
            }
        } catch (error) {
            toast.error("Failed to fetch user info");
        }
    };

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
                            <NameEditForm updateUserInformation={updateUserInformation} />
                            <EmailEditForm updateUserInformation={updateUserInformation} />
                            <PasswordForm updateUserInformation={updateUserInformation} />
                            <button className="w-[97%] bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                Delete Account
                            </button>
                            <button onClick={() => navigate("/")} className="w-[97%] mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
