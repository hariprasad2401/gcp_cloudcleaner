// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Sign_img from "./Sign_img";
import logo3 from "./logo3.jpg";
import LoginHeader from "../../Components/Header/LoginHeader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {FaArrowRight} from "react-icons/fa";

import axios from "axios";
var dict = [];
const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");
  const [username, setUsername] = useState("");
  const [projectid, setprojectid] = useState("");
  const [MasterChecked, setMasterCheck] = useState(false);
  const [passerr, setpasserr] = useState(false);

  const navigate = useNavigate();

  
  
  var Handlesignup = (e) => {
    e.preventDefault();
if (password===Confirmpassword){
  if(MasterChecked===true){
    const proid = async () => {
      const other = await axios("https://databasegateway-6rbq08w.ue.gateway.dev/mgdb/checkemail,"+JSON.stringify(email).replaceAll('"',''), {
        method: "GET"
      }).then((response) => {
        if (response.data.message === "ok") {
          const configuration = {
            method: "GET",
            url: "https://databasegateway-6rbq08w.ue.gateway.dev/mgdb/register,"+JSON.stringify(username).replaceAll('"','')+","+JSON.stringify(email).replaceAll('"','')+","+JSON.stringify(password).replaceAll('"','')+","+JSON.stringify(projectid).replaceAll('"',''),
          };
          axios(configuration)
            .then((result) => {
              console.log("rrrr",result);
            })
            .catch((error) => {
              console.log(error);
            });
          navigate("/");
        } else {
          alert("Email already registered");
        }
      });
    };

    proid();
    
  }
  else{
    alert("Please confirm the checkbox....") 
  }

}
else{
alert("Password Doesn't Match...")
  //  setpasserr(true)
  //  setTimeout(() => {
  //   setpasserr(false)
  // }, 10000);
}
  }
  let onMasterCheck = (e) => {
    setMasterCheck(e.target.checked);
  };

  return (
    <>
      <LoginHeader />
      <div
        className="backImage"
        style={{
          backgroundImage: "url(" + logo3 + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="d-flex justify-content-between">
          <Sign_img />

          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="signupheading text-center col-lg-3">Sign Up </h3>
            <Form onSubmit={(e) => Handlesignup(e)} className="signupform">
              <Form.Group className="mb-3 col-lg-3" controlId="text">
                <Form.Control
                  type="text"
                  name="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Your Name"
                  required
                />
              </Form.Group>
           
              <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
          
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
            
              </Form.Group>
             
              {/* <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="date" name="date" />
              </Form.Group> */}

              <Form.Group
                className="mb-3 col-lg-3"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  // onChange={(e) => inputpassword(e)}
                  required
                />
                 {passerr ? <span style={{color:"red"}}>password doesn't match</span> : " "}
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-3"
                controlId="formConfirmBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="Confirmpassword"
                  placeholder="Confirm Password"
                  value={Confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                <Form.Control
                  type="alphanumeric"
                  name="projectID"
                  placeholder="Enter project ID"
                  onChange={(e) => setprojectid(e.target.value)}
                  required
                />
              </Form.Group>
              <label className="singupcheckbox">
                <input
                  type="checkbox"
                  className="form-check-input "
                  checked={MasterChecked}
                  id="mastercheck"
                  onChange={(e) => onMasterCheck(e)}
                />
                <span> </span> Please Provide 'Owner' access to 'saforcf@cloudcleaner-365806.iam.gserviceaccount.com' service
                <br/>account in your project and Confirm. Refer <a href="https://cloud.google.com/iam/docs/granting-changing-revoking-access" target="_blank">this</a> documentation for configuration.
              </label>

              <Button
                variant="primary"
                className="signupsubmit"
                style={{ background: "#100C46" }}
                type="submit"
              >
                SignUp
              </Button>
            </Form>
            <br />
            <p className="signupaccount">
              Already Have an Account?{" "}
              <span className="redirecttologin">
                <Link style= { {textDecoration: 'none',color:"white",fontFamily:"times new roman",fontWeight:"600"}} to="/">Login<span> </span><FaArrowRight/></Link>
              </span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
export { dict };
