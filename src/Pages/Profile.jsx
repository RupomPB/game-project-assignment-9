import React, { use, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import userimg from '../assets/user.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router';

const Profile = () => {

    const {user } = use(AuthContext);

    useEffect(() => {
    document.title = "Profile - My Game Site";
  }, []);

    return (<>
<div>
    <Navbar></Navbar>
</div>
         <div className="min-h-screen flex flex-col justify-center items-center bg-base-300">
      <div className="card bg-white shadow-lg p-8 rounded-xl w-full max-w-md h-[450px]">
        <img
          src={user?.photoURL || userimg}
          className="w-28 h-28 mx-auto rounded-full mb-4 border"
        />
        <h2 className="text-xl font-semibold text-center py-3">User  Name: {user?.displayName || "No Name"}</h2>
        <p className="text-center text-gray-600 mt-2"> User  Email: {user?.email}</p>
        <Link to="/profile/update">
          <button className="btn btn-primary mt-5">Update Information</button>
        </Link>
      </div>
    </div>
    <div>
        <Footer></Footer>
    </div>
    </>
    );
};

export default Profile;