import React, { useState, useEffect } from "react";
import DoctorCard from "./../../components/Header/DoctorCard";
import { BASE_URL } from "./../../config";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/doctors`);
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }
        const doctorscard_data = await response.json();
        setDoctors(doctorscard_data.data); // Assuming the fetched data contains an array of doctors in the 'data' property
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  // Function to handle search
  const handleSearch = async () => {
    try {
      const response = await fetch(`${BASE_URL}/doctors?query=${searchTerm}`);
      if (!response.ok) {
        throw new Error("Failed to search doctors");
      }
      const data = await response.json();
      setDoctors(data.data); // Update doctors list with search results
    } catch (error) {
      console.error("Error searching doctors:", error);
    }
  };

  return (
    <>
      <section className="#bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find approved Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
