import { f4, f5 } from "../../pages/ComputeEngine/Instance";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import Alert from "@mui/material/Alert"
import { useState } from "react";
var text = "";
var value="";
const SubNavBar = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [link, setlink] = useState(false);
  const [delerror, setdelerror] = useState(false);
  const [input, setinput] = useState("");
 

  function getUnique(array) {
    var uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
      if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
  var newArr = getUnique(f4);

 
  const handleClose = () => setShow(false);

  // deleting process start
  function callingdelete(){
    setShow(true);
  }
  async function handleClick(e) {
   
    for (let j = 0; j < e.length; j++) {
      let test = e[j];
  

      await fetch(test, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.text())
        .then((result) => {
          //  result =  result.json();
          text = result;
          console.log("msg:", text);
          console.warn("warn:", result);
        });
    }



       value = localStorage.getItem("projectid");
      

// Demo function starts
    function Demo() {
      //count++
      const getUser = async () => {
     
        const resData = await fetch(
          "https://list-delete-gateway-6rbq08w.uc.gateway.dev/print/"+JSON.stringify(value).replaceAll('"',''),
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.text())
          .then((res) => {
            let test = Object.values(res.split("\n\n"));

            let a = [];
            for (let j = 0; j < test.length; j++) {
         
              var map = {};
              var listOfPairs = test[j].split("\n");
              for (var i = 0; i < listOfPairs.length; i++) {
                var pair = listOfPairs[i].split(": ");
                map[pair[0]] = pair[1];
              }
              if (map.asset_type === "compute/Instance") {
                a.push(map);
              }
            }
            if (a.length === f5.length) {
                   Demo();
            }
             else {
                setOpen(false);
                setlink(true);
                setTimeout(() => {
                window.location.reload(true);
              }, 1000);
            }
          });
      };
      getUser();
    }
    if (text === "Success") {
        Demo();
    }

  }

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };
  const handleClickEvent = () => {
    setShow(false);
    setOpen(true);
    handleClick(newArr)
  };

  function callingInputs() {
    if (input === "Delete") {
      handleClickEvent();
    }
  }
  const handletoclose = () => {
    setlink(false);
  };

 

  const changeBordercolor=(e)=>{
    
      let  b=e.target.value
    
      if (setinput(e.target.value)==='Delete') {
          e.target.style.border
                  = "2px solid black";
      }
     else{
        e.target.style.border
        = "2px solid red";

      }
  

  }   

  function refreshPage(){
    window.location.reload(false);
  }
  return (
    <>
      <Modal show={show} onHide={handleClick}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wrapper">
            
            <h6 class="Title subnavmodaltitle">
              Are you sure,want to delete,enter "Delete" below
            </h6>
        
            <div class="Input subnavmodalinputbox">
              <input
                onChange={(e) => changeBordercolor(e)}
                class="Input-text"
                placeholder="Delete"
              />
              {/* {<i class="fa fa-refresh fa-spin" style="font-size:24px"></i>} */}
            </div>
          
            <h6 class="Titletextnote">*Please ensure to take backup before deleting</h6>
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

     

       <Snackbar
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
       // bodyStyle={{ height: 200, width: 200, flexGrow: 0 }}
       sx={{
        width: "auto",
        color: "secondary",
      }}
        open={open}
        // autoHideDuration={60000}
        message="Started Deleting. . . . . . ."
        onClose={handleToClose}
        fontSize="large"
        action={
          <div>
           
            <IconButton size="small" aria-label="loading" color="inherit">
              <AutorenewIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleToClose}
           
            >
              <CloseIcon fontSize="medium" />
            </IconButton>
          </div>
        }
      /> 
     
      <Snackbar open={link} autoHideDuration={6000} onClose={handletoclose}>
        <Alert
          className="alert"
          onClose={handletoclose}
          severity="success"
          sx={{
            width: "auto",
            
            backgroundColor:"darkslategray",
            color: "white",
            fontSize: "large",
          }}
        >
          <strong>Successfully Deleted!!</strong>
        </Alert>
      </Snackbar>

   

      <div className="subNavBar">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Go
              </button>
            </form> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div>
      <button onClick={refreshPage} className="btn btn-primary">Refresh</button>
    </div> 
             
         
                <li className="nav-item">
           <button
                    data-toggle="Modal"
                    data-target="#exampleModal"
                    onClick={() => callingdelete()}
                    className="btn btn-outline-danger"
                    type="submit"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default SubNavBar;
