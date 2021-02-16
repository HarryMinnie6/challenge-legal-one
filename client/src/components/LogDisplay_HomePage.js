import React, { useEffect, useContext, useState, Component } from "react";
import axios from "axios";
import CallLogs from "../apis/CallLogs";
import { CallCenterContextAPI } from "../contextAPI/CallCenterContextAPI";

function LogDisplay_HomePage() {
  const [logs, setLogs] = useState([]);
  const [agents, setAgents] = useState([]);
  // const [isLoading , setIsLoading] =useState(true)
  useEffect(() => {
    const fetchLogs = async () => {
      const result = await axios("/logs");

      setLogs(result.data);
    };
    fetchLogs();
    const fetchAgentNames = async () => {
      const names = await axios("/agent");

      setAgents(names.data);
    };
    fetchAgentNames();
  }, []);

  console.log(agents);
  console.log(logs);


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
          {logs.map((item) => (
            <tr>
              <td>{item.number}</td>

              <td>{item.dateTime}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
          {/*<tr>
        <td>123456</td>
        <td>4</td>
        <td>michael jordan/ 12:55</td>
      </tr>*/}
        </tbody>
      </table>
      <div></div>
    </div>
  );
}

export default LogDisplay_HomePage;

