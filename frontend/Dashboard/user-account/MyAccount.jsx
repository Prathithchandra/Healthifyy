import React, { useContext, useState } from "react";
import { authContext } from "../../src/context/AuthContext";
import MyBookings from "./MyBooking";
import Profile from "./Profile";


const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const {user,role,token}=useContext(authContext);
  console.log('user values are'+JSON.stringify(user));
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const [tab, setTab] = useState("bookings");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Left section - Profile and Logout */}
      <div className="bg-white p-4 mb-8 w-full max-w-md rounded-lg flex items-center justify-center">
        <div className="flex items-center">
          {/* Profile photo */}
          <img
            src={user.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          {/* Profile details */}
          <div className="ml-4">
           &nbsp;&nbsp;&nbsp;&nbsp; <h1 className="text-xl font-bold">{user.name}</h1>
           
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">Gender: {user.gender}</p>
          </div>
        </div>
        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-red rounded-md shadow-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Right section - Booking Details */}
      <div className="bg-white p-4 w-full max-w-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Booking Details</h2>
        {tab === "bookings" && <MyBookings />}
        
      </div>
    </div>
  );
};

export default MyAccount;
