import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { Col, Row } from "react-bootstrap";
import { FiCpu } from "react-icons/fi";
import {BiCard } from "react-icons/bi";
import { MdStorage } from "react-icons/md";
import { FaVectorSquare } from "react-icons/fa";
import { BsStack, BsDiagram3Fill } from "react-icons/bs";
import { TbCodeMinus, TbMapSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import "../Style.scss";
var value1 = "";
var value2 = "";
var value3 = "";
var value4 = "";
var id = "projectid";
var id1 = "exportprojectid";
var id2 = "tableid";
var id3 = "datasetid";
var id4 = "email";
var list1 = [];
var list2 = [];
function Dashboard() {
  const key = localStorage.getItem("email");

  const dataid = async () => {
    const other = await axios(
      "https://databasegateway-6rbq08w.ue.gateway.dev/mgdb/dataset," +
        JSON.stringify(key).replaceAll('"', ""),
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

  value1 = localStorage.getItem("projectid");
  value2 = localStorage.getItem("exportprojectid");
  value3 = localStorage.getItem("datasetid");
  value4 = localStorage.getItem("tableid");
  var [getuserdata, setUserdata] = useState([]);

  const refresh = (e) => {
    if (JSON.stringify(value1) === "null") {
      setTimeout(() => {
        window.location.reload(false);
        e.preventDefault();
      }, 500);
    }
  };

  refresh(value1);

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
    }
  };

  for (let k = 0; k <= getuserdata.length; k++) {
    if (k % 2 === 0) {
      list1.push(getuserdata[k]);
    } else {
      list2.push(getuserdata[k]);
    }
  }

  function getUnique(array) {
    var uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
      if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
  var newArr = getUnique(list1);
  newArr.shift();
  newArr.pop();
  function getUniquenum(arr) {
    var uniqueArray2 = [];

    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray2.indexOf(arr[i]) === -1) {
        uniqueArray2.push(arr[i]);
      }
    }
    return uniqueArray2;
  }
  var newArr2 = getUniquenum(list2);

  console.log("lllll", newArr);
  console.log("kkkkk", newArr2);

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
              <h5>Resources Billing Details</h5>{" "}
             
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
          {newArr.map((getdata, index) => (
            <Row>
              <Col>
                <div class="card-body">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <h5>{getdata}</h5>
                      </div>

                      <div className="flip-card-back">
                        <h5>
                          {"₹ " +
                            parseFloat(newArr2[index]).toFixed(3).toString()}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
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
