import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {

  const navigate = useNavigate();
  const { createUser, setUser, signInGoogle, userInfo } = use(AuthContext);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    document.title = "Register - My Game Site";
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(email, name, password);
    if (password.length < 6) {
      setPasswordError("Password should be minimum  6 character");
      return;
    }
    if (password.toLowerCase() === password) {
      setPasswordError("Password must include at least one UPPERCASE letter");
      return;
    }
    if (password.toUpperCase() === password) {
      setPasswordError("Password must include at least one lowercase letter");
      return;
    }
    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userInfo({displayName: name,  photoURL: photo})
        .then(()=>{
          setUser({...user, displayName: name,  photoURL: photo});
          navigate('/')
        })
        .catch(error =>{
          toast.error(error.message)
          setUser(user)
        })
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("sign in with google Successfully", user);
        setUser(user);
        navigate('/');

      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              name="name"
            />
            {/* photo field */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="PhotoURL"
              name="photo"
            />
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn btn-outline bg-linear-to-r from-[#28EBE8] to-[#468CE8]  mt-4"
            >
              Register
            </button>
            {/* Google */}
            <button
              onClick={handleGoogle}
              type="button"
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
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
