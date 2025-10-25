import React, { use, useEffect, useRef } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const ForgetPassword = () => {

    const {resetPassword} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();

    const defaultEmail =location.state?.email || "";

    useEffect(() => {
    document.title = "Forget-Password - My Game Site";
  }, []);

    const handleResetPassword = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        
        if(!email){
            toast("Please enter your email address")
            return;
        }

        resetPassword(email)
        .then(()=>{
            toast("Password reset mail sent to your email  ! Redirecting to Gmail...");
             window.open('https://mail.google.com', '_blank');
        })
        .catch(error =>{
            toast.error(error.message);
        })

    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-300">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>

        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              ref={emailRef}
              defaultValue={defaultEmail}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline bg-linear-to-r from-[#28EBE8] to-[#468CE8] w-full font-semibold"
           >
            Reset Password
          </button>

          <button
            type="button"
            onClick={() => navigate("/auth/login")}
            className="btn btn-outline w-full mt-2"
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
    );
};

export default ForgetPassword;