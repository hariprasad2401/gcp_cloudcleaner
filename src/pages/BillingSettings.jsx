import React, { useState } from "react";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import { useNavigate } from "react-router-dom";
var key = "";
function BillingSettings() {
  const [projectid, setprojectid] = useState("");
  const [tableid, settableid] = useState("");
  const [datasetid, setdatasetid] = useState("");
  const [text, setText] = useState("Update");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    setText("Updating.....");
    const proid = async () => {
      key = localStorage.getItem("email");

      const other = await axios(
        "https://databasegateway-6rbq08w.ue.gateway.dev/mgdb/billingdetails," +
          JSON.stringify(key).replaceAll('"', "") +
          "," +
          JSON.stringify(datasetid).replaceAll('"', "") +
          "," +
          JSON.stringify(tableid).replaceAll('"', "") +
          "," +
          JSON.stringify(projectid).replaceAll('"', ""),
        {
          method: "GET",
        }
      ).then((response) => {
        if (response.data.message === "Update Successful") {
          setText("Update");
          setloading(true);
          setTimeout(() => {
            navigate("/");
          }, 4000);
        }
      });
    };
    proid();
  };

  return (
    <>
      <div class="card billingcard">
        <div class="card-header">
          <h3>Setup Information</h3>
        </div>
        <div class="card-body billingcardbody">
          <blockquote class="blockquote mb-0">
            <ui>
              <p>
                <li>
                  If you have already configured billing export, please provide
                  details asked in <strong>last section</strong>: If you have
                  configured export in
                  <br />
                  different project then please ensure to provide{" "}
                  <strong>'Owner'</strong>
                  permission to <strong>'xyz'</strong> service account in that
                  project.{" "}
                </li>
                <br />
                <li>
                  If you have not enabled billing export and wish to access
                  billing data in your dashboard, please follow below
                  <strong> documentation </strong>
                  <br />
                  to create a billing export.
                  <br />
                  <a
                    href="https://cloud.google.com/billing/docs/how-to/export-data-bigquery-setup"
                    target="_blank"
                  >
                    {" "}
                    https://cloud.google.com/billing/docs/how-to/export-data-bigquery-setup{" "}
                  </a>
                </li>
                You can either use same project or different project, but if you
                are using different project then please provide 'Owner'
                permission <br />
                to "xyz" service account in that project. If you have already
                configured export as above, please wait for 24hrs for table to
                be created <br /> in bigquery for first time.
                <br />
                <br />
                <li>
                  Provide requested details in below <strong>Form</strong> to
                  continue.
                </li>
              </p>
            </ui>
          </blockquote>
        </div>
      </div>
      <br />
      <h3>Billing setting</h3>
      <div className="billingsettingform">
        <div className=" accountcard card text-center">
          <div className="card-header">Billing Details</div>
          <div className="card-body">
            <form onSubmit={(e) => handlesubmit(e)}>
              <div className="currentprojectid form-group row">
                <label
                  for="inputPassword"
                  className="mylable col-sm-2 col-form-label"
                >
                  DataSet ID
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="mylable form-control"
                    id="inputPassword"
                    placeholder="Dataset Id"
                    onChange={(e) => setdatasetid(e.target.value)}
                    required
                  />
                </div>
              </div>
              <br />
              <div className="currentprojectid form-group row">
                <label
                  for="inputPassword"
                  className="mylable col-sm-2 col-form-label"
                >
                  Table ID
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="mylable form-control"
                    id="inputPassword"
                    placeholder="Table Id"
                    onChange={(e) => settableid(e.target.value)}
                    required
                  />
                </div>
              </div>

              <br />
              <div className="currentprojectid form-group row">
                <label
                  for="inputPassword"
                  className="mylable col-sm-2 col-form-label"
                >
                  Project ID
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="mylable form-control"
                    id="inputPassword"
                    placeholder="project Id"
                    onChange={(e) => setprojectid(e.target.value)}
                    required
                  />
                </div>
              </div>
              <br />

              <button type="Submit" className="billingsettingsubmitbtn">
                {text}
              </button>
              <Snackbar
                anchorOrigin={{
                  horizontal: "center",
                  vertical: "bottom",
                }}
                sx={{
                  width: "auto",
                  color: "secondary",
                }}
                open={loading}
                autoHideDuration={3000}
                message="Billing Data Updated Successfully!!!!"
                fontSize="large"
              />
            </form>
          </div>
          <div
            className="card-footer text-muted"
            // style={{
            //   borderTop: "2px solid #05083a",
            // }}
          >
            On Update, site will be redirected to Login page.....
          </div>
        </div>
      </div>
    </>
  );
}
export default BillingSettings;
