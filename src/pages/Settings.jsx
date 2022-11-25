import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fontStyle, fontWeight } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
var key = "";
var value1 = "";

// material button for redirecting info..
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Saved = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const [text, setText] = useState("OK");

  const [MasterChecked, setMasterCheck] = useState(false);

  const [project, setproject] = useState("");

  const navigate = useNavigate();

  const handleOpen = () => {
    const proid = async () => {
      key = localStorage.getItem("email");
      setText("Redirecting...");
      const other = await axios("https://databasegateway-6rbq08w.ue.gateway.dev/mgdb/updateproject,"+JSON.stringify(key).replaceAll('"','')+","+JSON.stringify(project).replaceAll('"',''), {
        method: "GET",
      }).then((response) => {
        console.log("hdfuhfhj", response.status);
        if (response.status === 200) {
          // alert("gdgh")
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      });
    };
    proid();
  };

  // Submit function
  const handlesubmit = (e) => {
    e.preventDefault();
    if (MasterChecked === true) {
      setOpen(true);

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
    <div className="accountchange">
      <div className=" accountcard card text-center">
        <div
          className="card-header"
          // style={{
          //   fontSize: "18px",

          //   fontFamily: "sans-serif",
          //   borderBottom: "2px solid #05083a",
          // }}
        >
          Project Change
        </div>
        <div className="card-body">
          <form onSubmit={(e) => handlesubmit(e)}>
            <div className="currentprojectid form-group row">
              <label
                for="staticEmail"
                className="mylable col-sm-2 col-form-label"
                // style={{ fontSize: "16px" ,fontWeight:"bold"}}
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
          <div>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Your Project ID Updateded Successfully...
                  </Typography>
                  <br />
                  <Button onClick={handleOpen}>
                  {/* <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
                    {text}
                  </Button>
                </Box>
              </Fade>
            </Modal>
          </div>
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
  );
};

export default Saved;
