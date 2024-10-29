import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setUserInfo } from '../store/userSlice';

const HomePage = () => {
  const token = useSelector(state => state.user.token);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const dispatch = useDispatch();
  useEffect(() => {
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
            email : userData.user.email,
            username : userData.user.username,
            description : userData.user.description
          }));
        } else {
          toast.error(userData.message);
        }
      } catch (error) {
        toast.error("Failed to fetch user info");
      }
    };

    if (token) {
      fetchUserInfo();
    }
  }, [token]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default HomePage;
