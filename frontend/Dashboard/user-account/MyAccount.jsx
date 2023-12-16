import React from "react";
import { useContext,useState } from "react";
import {authContext} from '../../src/context/AuthContext';
import MyBookings from "./MyBooking";
import Profile from "./Profile";

const MyAccount = () => {
    const {dispatch}=useContext(authContext);
    const handleLogout=()=>{
        dispatch({type:"LOGOUT"});
    }
    const [tab,setTab]=useState('bookings');
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top navigation */}
      <div className="flex justify-between items-center bg-white p-4">
        {/* My Bookings button */}
        <button onClick={()=>setTab('bookings')} className={`${tab==='bookings' && 'bg-primaryColor text-white font-normal'}px-3 py-2 bg-blue-500 text-black rounded-md shadow-md hover:bg-blue-600`}>
          My Bookings
        </button>
        {/* Profile Settings button */}
        <button onClick={()=>setTab('settings')} className={`${tab==='settings' && 'bg-primaryColor text-white font-normal'}px-3 py-2 bg-blue-500 text-black rounded-md shadow-md hover:bg-blue-600`}>
          Profile Settings
        </button>
      </div>

      {/* Profile section */}
      <div className="flex flex-col items-center justify-center mt-8">
        {/* Profile photo */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        {/* Profile details */}
        <h1 className="text-xl font-bold">John Doe</h1>
        <p className="text-gray-500">Email: johndoe@example.com</p>
        <p className="text-gray-500">Blood Group: O+</p>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center mt-8">
        {/* Logout button */}
        <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-red rounded-md shadow-md hover:bg-red-600 mr-4">
          Logout
        </button>
        {/* Delete Account button */}
        <button className="px-4 py-2 bg-red-500 text-red rounded-md shadow-md hover:bg-red-600">
          Delete Account
        </button>
        {
            tab==='bookings' && <MyBookings/>
        }
        {
            tab==='settings' && <Profile/>
        }
      </div>
    </div>
  );
};

export default MyAccount;
