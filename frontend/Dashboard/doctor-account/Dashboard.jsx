import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { authContext } from "../../src/context/AuthContext";
import { BASE_URL } from '../../src/config';

const Dashboard = () => {
    const { user, role } = useContext(authContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState('');
    const [disableButtons, setDisableButtons] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/appointments?role=${role}&id=${user._id}`);
                setData(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [role, user._id]);

    const handleStatusUpdate = async (email, newStatus) => {
        try {
            const response = await axios.put(`${BASE_URL}/appointments/${email}`, { status: newStatus, userId: user._id });
            console.log(response.data);
            setSuccessMessage(newStatus === 'Approved' ? 'Appointment approved successfully!' : 'Appointment cancelled successfully!');
            
            const updatedData = data.map(item =>
                item.email === email ? { ...item, status: newStatus } : item // Update based on email
            );
            setData(updatedData);

            // Disable buttons after the action is performed
            setDisableButtons(true);
        } catch (error) {
            console.error('Error updating status:', error);
            console.log('Axios error details:', error.response); // Log Axios error response
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item) => (
                        <div key={item._id} className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                                <p className="text-gray-600 mb-2">Patient Email: {item.email}</p>

                                <p className="text-gray-600 mb-2">Date: {item.date}</p>
                                <p className="text-gray-600 mb-2">Reason: {item.reason}</p>
                                <p className="text-gray-600 mb-4">Status: {item.status}</p>
                                <div className="flex justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => handleStatusUpdate(item.email, 'Approved')}
                                        disabled={disableButtons || item.status === 'Approved'}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => handleStatusUpdate(item.email, 'Cancelled')}
                                        disabled={disableButtons || item.status === 'Cancelled'}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
