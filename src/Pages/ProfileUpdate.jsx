import React, { use, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router";

const ProfileUpdate = () => {
  const { user, userInfo } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    userInfo({
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        alert("✅ Profile Updated Successfully");
        navigate("/profile");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-base-200">
        <form
          onSubmit={handleUpdate}
          className="bg-white p-8 rounded-xl shadow-md w-[400px]"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Update Profile
          </h2>
          <div className="form-control mb-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn btn-primary w-full mt-4">
            Update Information
          </button>
        </form>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ProfileUpdate;
