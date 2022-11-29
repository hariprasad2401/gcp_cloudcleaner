import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { Col, Row } from "react-bootstrap";
import { FiCpu } from "react-icons/fi";
import { MdStorage } from "react-icons/md";
import { FaVectorSquare } from "react-icons/fa";
import { BsStack, BsDiagram3Fill } from "react-icons/bs";
import { TbCodeMinus, TbMapSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Style.scss";
var value1 = "";
var value2 = "";
var value3 = "";
var value4 = "";

function Dashboard() {
  value1 = localStorage.getItem("projectid");
  value2 = localStorage.getItem("exportprojectid");
  value3 = localStorage.getItem("datasetid");
  value4 = localStorage.getItem("tableid");
  var [getuserdata, setUserdata] = useState([]);

  console.log("header",typeof(JSON.stringify(value1)))
  if(JSON.stringify(value1)==="null"){
    setTimeout(()=>{
      window.location.reload(false)
    },500)
  }


  useEffect(() => {
 
    names();
  }, []);

  const names = async () => {

    
    if (value3 !== "null" && value1 !== "null" && value2 !== "null") {
    
      const response = await fetch(
        "https://bill-6rbq08w.wl.gateway.dev/bill/" +
          JSON.stringify(value3).replaceAll('"', "") +
          "," +
          JSON.stringify(value4).replaceAll('"', "") +
          "," +
          JSON.stringify(value2).replaceAll('"', "") +
          "," +
          JSON.stringify(value1).replaceAll('"', "")
      );
      const d = await response.text();
      const data = d.split("\n");
      setUserdata(data);
      console.log("ds", data);
    }
  };
  console.log("////", getuserdata);

  return (
    <>
      <div className="card note1">
        <p>
          If you have already configured billing and yet data is not visible,
          then please cross check your <span> </span>
          <Link
            style={{
              textDecoration: "none",
              fontWeight: "600",
              fontFamily: "Arial",
              fontSize: "14px",
              color: "rgba(23, 25, 124, 1)",
            }}
            to="/AllFilesHandler/Billing"
          >
            Billing settings
          </Link>{" "}
        </p>
      </div>
      <div className="BillingGraph">
        <div className="details">
          <div className="card">
            <div className="card-header">
              <h5>Resources Billing Details</h5>
            </div>
            <div>
              <h6 className="billingnote"> Weekly Billing Details</h6>
            </div>
            <div class="card-body">
              <Plot
                data={[
                  {
                    type: "bar",

                    x: [
                      getuserdata[0],
                      getuserdata[2],
                      getuserdata[4],
                      getuserdata[6],
                      getuserdata[8],
                      getuserdata[10],
                      getuserdata[12],
                    ],
                    y: [
                      getuserdata[1],
                      getuserdata[3],
                      getuserdata[5],
                      getuserdata[7],
                      getuserdata[9],
                      getuserdata[11],
                      getuserdata[13],
                    ],
                  },
                ]}
                layout={{
                  width: 1020,
                  height: 410,
                  // title: "Billing Details",
                  showlegend: true,
                  xaxis: {
                    title: "GCP RESOURCES",
                    color: "black",
                  },
                  yaxis: {
                    title: "BILLING AMOUNT IN RS (₹)",
                    color: "black",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="resources">
        <div class="card">
          <div class="card-header">
            <strong>Recent Resources</strong>
          </div>
          <div class="card-body">
            <Row classNameName="rowcontent">
              <Col>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h5>{getuserdata[0]}</h5>
                    </div>
                    <div className="flip-card-back">
                      <h5>
                        {"₹ " +
                          parseFloat(getuserdata[1]).toFixed(3).toString()}
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h5>{getuserdata[2]}</h5>
                    </div>
                    <div className="flip-card-back">
                      <h5>
                        {"₹ " +
                          parseFloat(getuserdata[3]).toFixed(3).toString()}
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h5>{getuserdata[4]}</h5>
                    </div>
                    <div className="flip-card-back">
                      <h5>
                        {"₹ " +
                          parseFloat(getuserdata[5]).toFixed(3).toString()}
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row classNameName="rowcontent">
              <Col>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h5>{getuserdata[6]}</h5>
                    </div>
                    <div className="flip-card-back">
                      <h5>
                        {"₹ " +
                          parseFloat(getuserdata[7]).toFixed(3).toString()}
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h5>{getuserdata[8]}</h5>
                    </div>
                    <div className="flip-card-back">
                      <h5>
                        {"₹ " +
                          parseFloat(getuserdata[9]).toFixed(3).toString()}
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h5>{getuserdata[10]}</h5>
                    </div>
                    <div className="flip-card-back">
                      <h5>
                        {"₹ " +
                          parseFloat(getuserdata[11]).toFixed(3).toString()}
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h5>{getuserdata[12]}</h5>
                </div>
                <div className="flip-card-back">
                  <h5>
                    {"₹ " + parseFloat(getuserdata[13]).toFixed(3).toString()}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resources1">
        <div className="card">
          <div className="card-header">
            <div className="resourcename">
              {/* <h5> {<SiQuasar/>} Resources <div className="dashdocs"><TbGridDots/></div></h5> */}

              <NavDropdown
                title="Services"
                id="collasible-nav-dropdown"
                className="dropdown1"
              >
                <div className="calculator">
                  <NavDropdown.Item href="#action/3.1">
                    <a
                      href="https://cloud.google.com/docs/?_ga=2.143873264.-49736936.1659935029&_gac=1.213381011.1667793132.68b3c9592e7a131bd490aa31ae9f002e"
                      target="_blank"
                    >
                      <span>
                        <h5>Get documentation</h5>
                      </span>
                    </a>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    {" "}
                    <a
                      href="https://cloud.google.com/products/calculator/"
                      target="_blank"
                    >
                      <span>
                        <h5>Pricing Calculator</h5>
                      </span>
                    </a>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </div>
          <div>
            <div className="resourcelist">
              <ul class="list-group list-group-flush">
                <li className="list-group-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/AllFilesHandler/ComputeEngine/Instance"
                  >
                    {<FiCpu />} Compute Engine
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/AllFilesHandler/Storage/Bucket"
                  >
                    {<MdStorage />} Storage Bucket
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/AllFilesHandler/Storage/Bucket"
                  >
                    {<TbMapSearch />} Big Query
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/AllFilesHandler/Storage/Bucket"
                  >
                    {<TbCodeMinus />} Cloud Function
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/AllFilesHandler/SqlInstance"
                  >
                    {<BsStack />} SQL Instance
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/AllFilesHandler/CloudDNS"
                  >
                    {<BsDiagram3Fill />} Cloud DNS
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/AllFilesHandler/VPCnetworks/Firewall"
                  >
                    {<FaVectorSquare />} VPC Network
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
