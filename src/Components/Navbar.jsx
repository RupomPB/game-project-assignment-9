import React, { use } from "react";
import logoImg from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router";
import userimg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success(" Sign-out successful.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

 const links = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `ml-5 ${isActive ? "text-secondary font-bold border-b-2 border-secondary" : ""}`
      }
    >
      <li>Home</li>
    </NavLink>
    <NavLink
      to="/all-items"
      className={({ isActive }) =>
        `ml-5 ${isActive ? "text-secondary font-bold border-b-2 border-secondary" : ""}`
      }
    >
      <li>All Items</li>
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `ml-5 ${isActive ? "text-secondary font-bold border-b-2 border-secondary" : ""}`
      }
    >
      <li>Contact</li>
    </NavLink>
    <NavLink
      to="/about-us"
      className={({ isActive }) =>
        `ml-5 ${isActive ? "text-secondary font-bold border-b-2 border-secondary" : ""}`
      }
    >
      <li>About Us</li>
    </NavLink>

    {user && (
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `ml-5 ${isActive ? "text-secondary font-bold border-b-2 border-secondary" : ""}`
        }
      >
        <li>My Profile</li>
      </NavLink>
    )}

    {!user && (
      <>
        <NavLink
          to="/auth/login"
          className={({ isActive }) =>
            `ml-5 ${isActive ? "text-secondary font-bold border-b-2 border-secondary" : ""}`
          }
        >
          <li>Login</li>
        </NavLink>
        <NavLink
          to="/auth/register"
          className={({ isActive }) =>
            `ml-5 ${isActive ? "text-secondary font-bold border-b-2 border-secondary" : ""}`
          }
        >
          <li>Register</li>
        </NavLink>
      </>
    )}
  </>
);
  return (
    <div className="navbar  bg-base-100 shadow-sm   mx-auto">
      <div className="w-9/12 mx-auto flex">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center justify-between ">
            <img className="w-15 h-15" src={logoImg} />
            <p className="font-bold text-2xl text-secondary">GamerHub</p>
          </div>
          {/* {user && user.email} */}
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-2">{links}</ul>
        </div>
        <div className="navbar-end">
        {/* user image show  */}
          <img onClick={()=>navigate('/profile')}
            className="mr-5 w-11 rounded-full"
            src={`${user ? user.photoURL : userimg}`}
          />
          {user ? (
            <button
              onClick={handleLogout}
              className="btn bg-secondary text-base-100"
            >
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn bg-secondary text-base-100">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
