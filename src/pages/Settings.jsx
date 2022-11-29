
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
var key = "";
var value1 = "";

const Saved = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [text, setText] = useState("OK");

  const [MasterChecked, setMasterCheck] = useState(false);

  const [project, setproject] = useState("");

  const navigate = useNavigate();

  const callingInputs = () => {
 
   
    const proid = async () => {
      key = localStorage.getItem("email");
      // setText("Redirecting...");
      const other = await axios("https://databasegateway-6rbq08w.ue.gateway.dev/mgdb/updateproject,"+JSON.stringify(key).replaceAll('"','')+","+JSON.stringify(project).replaceAll('"',''), {
        method: "GET",
      }).then((response) => {
        console.log("hdfuhfhj", response.status);
        if (response.status === 200) {
          setShow(false)
          setOpen(true)
          // alert("gdgh")
          // setTimeout(() => {
          //   navigate("/");
          // }, 1000);
        }
      });
    };
    proid();
  };

  const handleOpen=()=>{
    setText("Redirecting...");
      setTimeout(() => {
            navigate("/");
           }, 2000);

  }
  // Submit function
  const handlesubmit = (e) => {
    e.preventDefault();
    if (MasterChecked === true) {
      
      setShow(true)
      console.log("hello");
    }
  };


  value1 = localStorage.getItem("projectid");

  // Select/ UnSelect Table rows
  let onMasterCheck = (e) => {
    //Update State
    setMasterCheck(e.target.checked);
  };

  return (
    <>
    <Modal show={show} >
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Project Change Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wrapper">
            <h6 class="Title">
              Are you sure,want to change the project
            </h6>
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="Danger"
            onClick={callingInputs}
            className="btn btn-success"
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={open}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Update Info.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wrapper">
            <h6 class="Title">
            Your Project ID Updateded Successfully!!!!!
            </h6>
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
         
          <Button
            variant="primary"
            onClick={handleOpen}
            className="btn btn-success"
          >
            {text}
          </Button>
        </Modal.Footer>
      </Modal>
    <div className="accountchange">
      <div className=" accountcard card text-center">
        <div
          className="card-header"
       
        >
          Project Change
        </div>
        <div className="card-body">
          <form onSubmit={(e) => handlesubmit(e)}>
            <div className="currentprojectid form-group row">
              <label
                for="staticEmail"
                className="mylable col-sm-2 col-form-label"
              
              >
                Current Project ID
              </label>
              <div class="col-sm">
                <input
                  type="text"
                  readonly
                  className="value1 form-control-plaintext"
                  id="staticEmail"
                  value={value1}
                  // style={{ fontSize: "16px", fontFamily: "sans-serif" }}
                />
              </div>
            </div>
            <br />
            <div className="currentprojectid form-group row">
              <label
                for="inputPassword"
                className="mylable col-sm-2 col-form-label"
                // style={{ fontSize: "16px", fontFamily: "sans-serif" }}
              >
                New Project ID
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  className="mylable form-control"
                  id="inputPassword"
                  placeholder="project Id"
                  onChange={(e) => setproject(e.target.value)}
                  required
                />
              </div>
            </div>
            <br />
            <label>
              <input
                type="checkbox"
                className="form-check-input"
                checked={MasterChecked}
                id="mastercheck"
                onChange={(e) => onMasterCheck(e)}
              />
              <span> </span> <span className="note"> <em>Please Provide 'Owner' access to 'XYZ' service
              account in your project and Confirm.</em></span>
            </label>
            {/* <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button> */}
            <br />
            <Button type="submit" className="settingsubmit">
              Submit
            </Button>
          </form>
         
        </div>
      
        <div
          className="card-footer text-muted"
          // style={{
          //   borderTop: "2px solid #05083a",
          // }}
        >
          On submit, site will be redirected to Login page.....
        </div>
      </div>
    </div>
    </>
  );
};

export default Saved;