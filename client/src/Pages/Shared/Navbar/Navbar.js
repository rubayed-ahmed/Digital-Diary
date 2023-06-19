import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <section className="navbar bg-base-100  md:px-12 lg:px-32 border max-w-[100vw]">
      <div className="navbar-start">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-32 md:w-auto rounded-full h-8 text-sm"
          />
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/" className="text-xl font-bold uppercase">Digital Diary</Link>
      </div>

    <div className="navbar-end">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 py-2 shadow bg-base-100 rounded-box">
        <li><Link to="/admin/register">Register</Link></li>
      </ul>
    </div>
  </div>
    </section>
  );
};

export default Navbar;
