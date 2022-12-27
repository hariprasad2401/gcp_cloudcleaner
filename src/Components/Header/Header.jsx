//import { logDOM } from '@testing-library/react'
import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import Login from "../../pages/Authentication/Login";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { GrMail } from "react-icons/gr";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { MdOutlineWifiProtectedSetup, MdSpaceDashboard } from "react-icons/md";
import { CgLogOff } from "react-icons/cg";
import { FaUserTie } from "react-icons/fa";

var value = "";
var value1 = "";

export default function Header() {
  value = localStorage.getItem("email");
  value1 = localStorage.getItem("projectid");

  const [file, setFile] = useState();

  const navigate = useNavigate();
   
function headerLogoHandler(){
  navigate("/AllFilesHandler/Dashboard")
}


  function handlelogout() {
    navigate("/");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-transperent">
        <div className="container-fluid">
        <div>
            <img
              src={logo}
              alt="Logo"
              width="150"
              height="25"
              className="d-inline-block align-text-top"
              onClick={headerLogoHandler}
              
        
            />
         
        </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <NavDropdown
                title="Profile"
                id="collasible-nav-dropdown"
                className="profileheader dropdown"
              >
                <div className="headerdropdownlist">
                  <NavDropdown.Item
                    href="#action/3.1"
                    style={{
                      fontWeight: "600",
                      fontFamily: "Arial",
                      fontSize: "16px",
                      color: "#1A2238",
                      paddingBottom: "15px",
                    }}
                  >
                    <GrMail />
                    <span> </span> {"Email " + ":" + " " + value}
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="#action/3.2"
                    style={{
                      fontWeight: "600",
                      fontFamily: "Arial",
                      fontSize: "16px",
                      color: "#1A2238",
                    }}
                  >
                    <MdSpaceDashboard />
                    <span> </span> {"Project ID " + ":" + " " + value1}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    <Link
                      style={{
                        textDecoration: "none",
                        fontWeight: "600",
                        fontFamily: "Arial",
                        fontSize: "17px",
                        color: "rgba(23, 25, 124, 1)",
                      }}
                      to="/AllFilesHandler/Settings"
                    >
                      <MdOutlineWifiProtectedSetup /> <span> </span>Change
                      Project
                    </Link>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              <li className="nav-item">
                <Form onSubmit={handlelogout}>
                  <Button
                    variant="primary"
                    className="submitlogout"
                    style={{ background: "#100C46" }}
                    type="submit"
                  >
                    <CgLogOff />
                    <span> </span>Logout
                  </Button>
                </Form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
