import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className=" font-bold text-2xl text-center py-4">
            Register your Account
          </h2>
          <fieldset className="fieldset">
{/* name field */}
          <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Your Name" />
{/* photo field */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="PhotoURL" />
          {/* email field */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-outline bg-linear-to-r from-[#28EBE8] to-[#468CE8]  mt-4">Register</button>
            <p className=" font-semibold text-center py-4">
              Already have a account?..
              <Link className=" text-secondary " to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
