import React, { useState, useEffect } from "react";
import "../../Components/SubNav/SubNavBarDisk";
import SubNavBar from "../../Components/SubNav/SubNavBarDisk";
import Pagination from "../../Components/SubPagination/Pagination";
import Snackbar from "@material-ui/core/Snackbar";
import "../../Style.scss";
import axios from "axios";

let PageSize = 3;
var f4 = [];
var f5 = [];
var value=""
function Disk() {
  // localStorage.removeItem("projectid")
  const [getuserdata, setUserdata] = useState([]);
  const [isChecked, setisChecked] = useState([]);
  const [list, setList] = useState([]);
  const [MasterChecked, setMasterCheck] = useState(false);
  const [loading, setloading] = useState(false);
  
  useEffect(() => {
    const getUser = async () => {
      setloading(true)
      //const key = localStorage.key(0);

      // projectid
       value = localStorage.getItem("projectid");
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
          
            if (map.asset_type === "compute/Disk") {
              a.push(map);
        
            }
          }
          return a;
        });

      setUserdata(resData);
      setloading(false)
    };
    getUser();
  }, []);

  f5 = getuserdata;

  const [currentPage, setCurrentPage] = useState(1);
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData = getuserdata.slice(firstPageIndex, lastPageIndex);

  const handlecheckbox = (e) => {
    const { value, checked } = e.target;
  
    if (checked) {
      setisChecked([...isChecked, value]);
    } else {
      setisChecked(isChecked.filter((e) => e !== value));
    }
  };

  // Select/ UnSelect Table rows
  let onMasterCheck = (e) => {
    let tempList = getuserdata;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));


    //Update State
    setMasterCheck(e.target.checked);
    setUserdata(tempList);
    setList(getuserdata.filter((e) => e.selected));
  };

  // Update List Item's state and Master Checkbox State
  let onItemCheck = (e, item) => {
    let tempList = getuserdata;
    tempList.map((user) => {
      if (user.name === item.name && user.location === item.location) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = getuserdata.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    setMasterCheck(totalItems === totalCheckedItems);
    setUserdata(tempList);
    setList(getuserdata.filter((e) => e.selected));
  };

  let f1 = list;

  f4 = [];
  //let f5=[]
  for (let i = 0; i < f1.length; i++) {
    let temp = [];
    temp.push(f1[i]);
    let d1 = Object.assign({}, ...temp.map((x) => ({ ["name"]: x.name })));
    let d2 = Object.assign(
      {},
      ...temp.map((y) => ({ ["location"]: y.location }))
    );
    let d3 = Object.assign(
      {},
      ...temp.map((z) => ({ ["asset_type"]: z.asset_type }))
    );
    const f2 =
      "https://list-delete-gateway-6rbq08w.uc.gateway.dev/p" +
      "/" +
      d1["name"] +
      "," +
      d2["location"].trim() +
      "," +
      d3["asset_type"].replace("/", "-") +
      "," +
      JSON.stringify(value).replaceAll('"','');
 
    f4.push(f2);
    //f4=f5;
   
  }

  return (
    <>
        
   
      <React.Fragment>
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
        message="Data is Loading, Please Wait....."
        fontSize="large"

  
        
      /> 
        <div className="my-content">
          <div>
            <h2>Disk</h2>
          </div>
          <div className="container-md">
            <SubNavBar />
            <br />
            <div className="row">
              <div className="col-md-12">
                <div className="scrollContent">
                  <table className="table  table-bordered">
                    <thead className="head">
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={MasterChecked}
                            id="mastercheck"
                            onChange={(e) => onMasterCheck(e)}
                          />
                        </td>
                        <td>Sr.No</td>
                        <td>Name</td>
                        <td>Location</td>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {currentTableData.map((userrecords, index) => (
                        <tr
                          key={index}
                          className={userrecords.selected ? "selected" : ""}
                        >
                          <td>
                            <input
                              type="checkbox"
                              checked={userrecords.selected}
                              className="form-check-input"
                              id="rowcheck{userrecords.name}"
                              onChange={(e) => onItemCheck(e, userrecords)}
                            />
                          </td>
                          <td>{index + 1} </td>
                          <td>{userrecords.name}</td>
                          <td>{userrecords.location}</td>
                         
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <br />
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={getuserdata.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
        <br/>
        <div className="card note2">
        <p>
       * Disks attached to instances cannot be deleted
        
        </p>
      </div>
      </React.Fragment>
    </>
  );
}
export default Disk;
export { f4 };
export { f5 };
