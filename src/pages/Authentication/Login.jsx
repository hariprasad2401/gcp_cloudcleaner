import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo2 from "./logo2.jpg";
import LoginHeader from "../../Components/Header/LoginHeader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sign_img from "./Sign_img";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { ImKey } from "react-icons/im";

var store_email = "";
var id = "projectid";
var id1 = "exportprojectid";
var id2 = "tableid";
var id3 = "datasetid";
var id4 = "email";
const Login = () => {
  const [userErr, setUserErr] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [projectid, setprojectid] = useState([]);
  const [text, settext] = useState("Login");

  const navigate = useNavigate();

  const HandleClick = (e) => {
    localStorage.clear();

    e.preventDefault();

    const configuration = {
      method: "GET",
      url:
        "https://databasegateway-6rbq08w.ue.gateway.dev/mgdb/login," +
        JSON.stringify(email).replaceAll('"', "") +
        "," +
        JSON.stringify(password).replaceAll('"', ""),
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
        localStorage.setItem(id4, email);
      })
      .catch((error) => {
        error = new Error();
        alert("Incorrect username/password");
        window.location.reload(false);
      });

    settext("Logging in.....");
  };

  if (login === true) {
    //Project id push to localstorage

    const proid = async () => {
      const other = await axios(
        "https://databasegateway-6rbq08w.ue.gateway.dev/mgdb/project," +
          JSON.stringify(email).replaceAll('"', ""),
        {
          method: "GET",
        }
      ).then((response) => {
        const posts = response.data;

        localStorage.setItem(id, posts.projectid);

        return posts.projectid;
      });

      setprojectid(other);
    };

    proid();

    const dataid = async () => {
   
      const other = await axios(
        "https://databasegateway-6rbq08w.ue.gateway.dev/mgdb/dataset," +
          JSON.stringify(email).replaceAll('"', ""),
        {
          method: "GET",
        }
      ).then((response) => {
        const posts = response.data;

        localStorage.setItem(id3, posts.datasetid);
        localStorage.setItem(id2, posts.tableid);
        localStorage.setItem(id1, posts.exportprojectid);
      });
    };
    dataid();

    navigate("/AllFilesHandler/Dashboard");
  }

  store_email = email;

  return (
    <>
      <LoginHeader />
      <div
        className="backImage"
        style={{
          backgroundImage: "url(" + logo2 + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="d-flex justify-content-between">
          <Sign_img />
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3
              className="text-center col-lg-4 loginheading"
              style={{ color: "#051257" }}
            >
              Login{" "}
            </h3>

            <Form onSubmit={HandleClick}>
              <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                <div className="loginemailicon">
                  {<AiOutlineMail />} <span> </span>Email
                </div>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  //onChange={userHandler}
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />{" "}
                {userErr ? <span></span> : " "}
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-4 fa fa-eye"
                controlId="formBasicPassword"
              >
                <div className="loginpasswordicon">
                  {<ImKey />} <span> </span>Password
                </div>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                 
                  required
                />
            
                {userErr ? (
                  <span style={{ color: "red" }}>{userErr}</span>
                ) : (
                  " "
                )}
              </Form.Group>
              <br />
              <Button
                variant="primary"
                className="submit"
                style={{ background: "#100C46" }}
                type="submit"
              >
                {text}
              </Button>
              <br />
            </Form>
            <br />
            <p className="account">
              Don't have an account?{" "}
              <span className="redirecttologin">
                {" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontFamily: "times new roman",
                    fontWeight: "600",
                  }}
                  to="/Signup"
                >
                  {" "}
                  Signup<span> </span>
                  <FaArrowRight />
                </Link>
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
export { store_email };
