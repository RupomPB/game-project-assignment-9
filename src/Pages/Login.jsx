import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

  const {loginUser, setUser } = use(AuthContext);

  const handleLogin=(e)=>{
    e.preventDefault();
    const form= e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
    .then((result) => {
    const user = result.user;
    setUser(user)
  })
  .catch((error) => {
    alert(error.message)
  });
  }

    return (
        <div className=" flex justify-center items-center min-h-screen">

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className=' font-bold text-2xl text-center pt-4'>Login your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
        {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email"  name='email'/>
{/* password field*/}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='password' />
          <div><a className="link link-hover">Forgot password?</a></div>

          <button type='submit' className="btn btn-outline mt-4 bg-linear-to-r from-[#28EBE8] to-[#468CE8]">Login</button>
          <p className=' font-semibold text-center py-4'>Don't have a account?.. 
           <Link className=' text-secondary ' to='/auth/register'>Register</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Login;