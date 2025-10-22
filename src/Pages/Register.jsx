import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  const {createUser, setUser} = use(AuthContext)
  const [passwordError, setPasswordError]= useState('')

  const handleRegister = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(email, name, password)
    if(password.length <6){
      setPasswordError('Password should be minimum  6 character')
    }
    else{
      setPasswordError('')
    }

    createUser(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      setUser(user)
    })
    .catch(error=>{
      alert(error.message)
    })


  }

  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h2 className=" font-bold text-2xl text-center pt-4">
            Register your Account
          </h2>
        <form onSubmit={handleRegister} className="card-body"> 
          <fieldset className="fieldset">
{/* name field */}
          <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Your Name" name="name" />
{/* photo field */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="PhotoURL" name="photo" />
          {/* email field */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" name="email" />
            {/* password field */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name="password" />
            {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-outline bg-linear-to-r from-[#28EBE8] to-[#468CE8]  mt-4">Register</button>
            <p className=" font-semibold text-center py-4">
              Already have a account?..
              <Link className=" text-secondary " to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
