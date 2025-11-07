import React from "react";
import "./page6.css";
import Bg from "./components/bg.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Page6() {
  return (
    <div className="page6-container">
      <Bg />


      <h1 className="page6-heading">Comics Studies<br />Lab@IITJ</h1>

      <div className="register-section">
<<<<<<< HEAD
        <div className="register-link"><Link to="/page7">Please register</Link></div>
=======
        <Link to="/page7" className="register-link">
          Please register
        </Link>
>>>>>>> 50a662103d504ab08c4306f4f5dae8318cccf1b6
      </div>
    </div>
  );
}

export default Page6;
