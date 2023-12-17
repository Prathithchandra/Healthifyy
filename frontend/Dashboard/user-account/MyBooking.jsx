import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { authContext } from "../../src/context/AuthContext";
import { BASE_URL } from '../../src/config';


const MyBookings = () => {
  const {user,role } = useContext(authContext);// Access role and id from the context
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
console.log("USER data passed are "+JSON.stringify(user)+role);
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const url = `${BASE_URL}/appointments?role=${role}&id=${user.email}`;
        const response = await axios.get(url);
        if (response.data.success) {
            console.log("resposen data of booooking is"+JSON.stringify(response.data))
          setAppointments(response.data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [role, user._id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">My Bookings</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {appointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {appointments.map((appointment) => (
                <div key={appointment._id} className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{appointment.name}</h3>
                    <p className="text-gray-600 mb-2">Date: {appointment.date}</p>
                    <p className="text-gray-600 mb-2">Reason: {appointment.reason}</p>
                    <p className="text-gray-600">Email: {appointment.email}</p>
                    <p className="text-gray-600">DoctorId: {appointment.doctorId}</p>
                    <p className="text-gray-600">Status: {appointment.status}</p>
                    {/* Add more appointment details as needed */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
  
};

export default MyBookings;
