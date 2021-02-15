import React, { useEffect, useContext } from "react";
// import { response } from "../../../app";
import CallLogs from "../apis/CallLogs";
import {CallCenterContextAPI} from "../contextAPI/CallCenterContextAPI"

function LogDisplay_HomePage() {
    const [logs , setLogs] =useContext(CallCenterContextAPI)
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await CallLogs.get("/logs");
        console.log(response);
      } catch (error) {}
    };
    FetchData();
  }, []);

  return (
    <div className='container'>
      <table className='table table-hover table-dark'>
        <thead>
          <tr className='bg-primary'>
            <th scope='col'>Phone Number</th>
            <th scope='col'>Number of calls</th>
            <th scope='col'>Last Call Details</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((item) => {
            <tr></tr>;
          })}
          {/*<tr> 
            <td>123456</td>
            <td>4</td>
            <td>michael jordan/ 12:55</td>
          </tr>*/}
        </tbody>
      </table>
    </div>
  );
}

export default LogDisplay_HomePage;
