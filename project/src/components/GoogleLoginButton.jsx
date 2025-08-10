import axios from 'axios';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useGoogleLogin } from "@react-oauth/google";
// import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googlestate, isloadingSet, register } from '../store/slices/authSlice';

const GoogleLoginButton = () => {

  const dispatch = useDispatch()
//   const { register, login } = useAuth();
  const navigate = useNavigate();

  const checkGoogleAuthentication = (user) => {
    // console.log(user);
    if (user) {
      axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      ).then(async (res) => {
    

        // try{
        //     const res_data = await axios.post("https://note-saver-backend.onrender.com/api/auth/register",{
        //       email:res.data.email,
        //       name:res.data.family_name,
        //       password:"same123.456"
        //     })
        //     dispatch(googlestate({
        //       user:res_data.user,
        //       token:res_data.token
        //     }))
        // }catch(err){
        
        //   if(err.response.status==400){
        //     const response_data =  await axios.post("https://note-saver-backend.onrender.com/api/auth/login",{
        //       email:res.data.email,
        //       // name:res.data.family_name,
        //       password:"same123.456"
        //     })
        //      dispatch(googlestate({
        //       user:response_data.user,
        //       token:response_data.token
        //     }))
        //   }
        // }

        try{
            dispatch(isloadingSet(true))
            const res_data = await axios.post("https://note-saver-backend.onrender.com/api/auth/google-login-api",{
               email:res.data.email,
               name:res.data.family_name,
               password:"same123.456"
            })
              dispatch(googlestate({
              user:res_data.user,
              token:res_data.token
            }))
        }catch(err){
          dispatch(isloadingSet(false))
          console.log(err)
        }

      });
    }
  };

  const loginUsingGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      const user = codeResponse;
      // console.log(user);
      checkGoogleAuthentication(user);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <button
      onClick={() => loginUsingGoogle()}
      className="w-full flex items-center justify-center px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-lg bg-white hover:bg-gray-50 text-gray-900 font-medium transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
    >
      <FaGoogle className="mr-2 sm:mr-3 text-red-500 text-sm sm:text-base" />
      Continue with Google
    </button>
  );
};

export default GoogleLoginButton;
