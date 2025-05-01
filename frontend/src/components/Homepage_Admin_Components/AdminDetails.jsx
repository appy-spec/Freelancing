
import React from "react";
import { useState, useEffect } from "react";
import Posted_Jobs from "./Posted_Jobs";
import JobCard from "../Homepage/JobCard";
import Assigned_Jobs from "./Assigned_Jobs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDetails = () => {
  const navigate=useNavigate();
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/profile");
      const profile_data = response.data.profile;
      setProfileData(profile_data);
    })();
  }, []);

  const handleLogOut=()=>{

    axios
      .post("/api/logout_user", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        navigate("/");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error in logout:", error);
      });

  }

  return (
    <>
      {profileData !== null ? (
        <>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-xl  text-orange-400 mb-4">
              Username:{" "}
              <span className="text-white">{profileData.username}</span>
            </h2>

            <div className="mb-4">
              <h2 className="text-lg  text-orange-400">
                Name: <span className="text-white">{profileData.name}</span>
              </h2>
            </div>

            {profileData.bio ? (
              <div className="mb-4">
                <h2 className="text-lg  text-orange-400">
                  Bio: <span className="text-white">{profileData.bio}</span>
                </h2>
              </div>
            ) : (
              <p className="text-lg text-orange-400">
                Bio: <span className="text-white"> Not set </span>{" "}
              </p>
            )}

            {/* Jobs Posted */}
            {profileData.jobsPosted?.length !== 0 ? (
              <div className="mb-4">
                <h2 className="text-lg mt-5 font-semibold text-orange-400">Jobs Recently Posted:</h2>
                <div className="mt-2 space-y-3">
                  {profileData.jobsPosted.map((job, index) => (
                    <Posted_Jobs key={index} job={job} className="bg-gray-700 p-4 rounded-md" />
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-white">Jobs Currently Posted: 0</p>
            )}

            {/* Jobs Assigned */}
            {profileData.jobsAssigned?.length !== 0 ? (
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-orange-400">Jobs Assigned:</h2>
                <ul className="mt-2 list-disc list-inside text-white">
                  {profileData.jobsAssigned.map((job, index) => (
                    <Assigned_Jobs key={index} job={job} className="bg-gray-700 p-4 rounded-md" />
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-white">Jobs Assigned: 0</p>
            )}

            {/* Reviews */}
            {profileData.reviews?.length !== 0 ? (
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-orange-400">Reviews: 0</h2>
                <div className="mt-2 space-y-2">
                  {profileData.reviews &&
                    profileData.reviews.map((review, index) => (
                      <p className="text-white" key={index}>
                        {review}
                      </p>
                    ))}
                </div>
              </div>
            ) : (
              <p className="text-white">Reviews: 0</p>
            )}

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-orange-400">
                Rating: <span className="text-white">{profileData.rating}</span>
              </h2>
            </div>

            <div className="mb-4">
              <h2 className="text-lg font-semibold text-orange-400">
                Number of Ratings: <span className="text-white">{profileData.ratingCount}</span>
              </h2>
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-white">No data available</h2>
      )}
      <div style={{marginTop:"20px"}}>
      <a target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-red-700 mx-2" onClick={()=>{handleLogOut()}}>
        Logout
      </a>
      </div>
    </>
  );
};

export default AdminDetails;
