import React, { useState, useEffect } from "react";
  export default function AppEngine() {
    const [User, fetchUser] = useState([]);
    const getData = () => {
      fetch("https://list-export-3x4ksm6i.uc.gateway.dev/print", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.text())
        .then((res) => {
          let test = Object.values((res.split('\n\n')));
          function filterItems(arr, query) {
            return arr.filter((el) =>
              el.includes(query)
            );
          }
          let filter1=filterItems(test,"appengine")
        // let filter2=Object.values(filter1.Prototype.name)
          console.log(filter1)
          fetchUser(filter1);
        });
    };
    useEffect(() => {
      getData();
    }, []);
    return (
      <>
        <h2>App Engine Data</h2>
        <div>
          {User.map((obj) => (
            <ol><h5>{obj}</h5></ol>
          ))}
        </div>
      </>
    );
  }