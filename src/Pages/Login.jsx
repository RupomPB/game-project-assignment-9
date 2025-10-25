import React, { use, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate,  } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, signInGoogle } = use(AuthContext);
  const [error, setError] = useState('');
  const emailRef = useRef()

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)

  useEffect(() => {
    document.title = "Login - My Game Site";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successfully")
        navigate(`${location.state ? location.state : "/"}`)
      })
      .catch((error) => {
        switch(error.code){
        case 'auth/user-not-found':
          setError("User not found. Please check your email.");
          break;
        case 'auth/wrong-password':
          setError("Incorrect password. Please try again.");
          break;
        case 'auth/invalid-email':
          setError("Invalid email address.");
          break;
        default:
          setError("Login failed. Please try again.");
      }
      });
  };

  // forget password
  const handleForgetPassword=()=>{
    const email = emailRef.current.value;
    navigate('/forget-password', {state: {email}});
    // resetPassword(email)
    // .then(()=>{
    //   alert('please check your email')
    // })
    // .catch(error=>{
    //   alert(error.message)
    // })
  }

  const handleGoogle =()=>{
    signInGoogle()
    .then(result =>{
      const user = result.user;
      toast.success("sign in with google", user);
      navigate(location.state ? location.state: '/')
    } )
    .catch(error=>{
      toast.error(error.message)
    })
  }

  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className=" font-bold text-2xl text-center pt-4">
          Login your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              ref ={emailRef}
              required
            />
            {/* password field*/}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            <div onClick={handleForgetPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="btn btn-outline mt-4 bg-linear-to-r from-[#28EBE8] to-[#468CE8]"
            >
              Login
            </button>
            {/* Google sign in field */}
            <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
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
            {
              error && <p className='text-red-500 text-xs'>{error}</p>
            }
            <p className=" font-semibold text-center py-4">
              Don't have a account?..
              <Link className=" text-secondary " to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
