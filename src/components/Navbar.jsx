import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  //   const {name} = useParams();

  const { myname } = useAuth();

  return (
    <>
      <div className="nav">
        <div className="nav-right">
          <ul className="nav-right-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav-left">
          <h4>{myname}</h4>
        </div>
      </div>
    </>
  );
};

export default Navbar;
