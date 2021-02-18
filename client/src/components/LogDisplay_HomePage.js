import React, { useEffect, useContext, useState, Component } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import CallLogs from "../apis/CallLogs";


function LogDisplay_HomePage() {
  const [logs, setLogs] = useState([]);
  const [agents, setAgents] = useState([]);
  const [agent, setSingleAgents] = useState([]);

  const history = useHistory();
  useEffect(() => {
    const fetchLogs = async () => {
      const result = await CallLogs.get("/logs");
      setLogs(result.data);
    };
    fetchLogs();
    // ==========================================================================================
    const fetchAgentNames = async () => {
      const names = await CallLogs.get("/agent");
      setAgents(names.data);
    };
    fetchAgentNames();
    // ==========================================================================================
    const fetchAgent = async () => {
      const result = await CallLogs.get(`/agent`);
      setSingleAgents(result.data);
    };
    fetchAgent();
    console.log("agents", agent);
    // ==========================================================================================
  }, []);

  console.log(agent);
  console.log(logs);

  const display_call_logs = (number) => {
    history.push(`/call/${number}`);
  };
  const display_agent_logs = (identifier) => {
    history.push(`/agent/${identifier}`);
  };

  function seconds_to_minutes(value) {
    value = Number(value);
    var minutes = Math.floor((value % 3600) / 60);
    var seconds = Math.floor((value % 3600) % 60);
    return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  }

  return (
    <div className='container  page'>
      <table className='table table-hover table-striped border '>
        <thead>
          <tr className='bg-primary text-light'>
            <th scope='col' className='text-center'>
              Phone Number
            </th>
            <th scope='col' className='text-center'>
              Call Date and Time
            </th>
            <th scope='col' className='text-center'>
              Call Duration
            </th>
            <th scope='col' className='text-center'>
              Last Call Details
            </th>
          </tr>
        </thead>
        <tbody>
          {logs.map((item) => (
            <tr key={item.identifier} >
              <td  className='text-center'>
                <a
                  href=''
                  className='text-center call_log_link'
                  onClick={() => display_call_logs(item.number)}
                >
                  {item.number}
                </a>
              </td>

              <td className='text-center'>
                {item.dateTime.split("T").join(" ").replace(".000Z", " ")}
              </td>
              <td className='text-center'>
                {seconds_to_minutes(item.duration)}
              </td>
              {agent.filter(
                (user1) => user1.identifier === item.agentIdentifier
              ) ? (
                <td className='text-center'>
                  {agent.map((user) =>
                    user.identifier === item.agentIdentifier ? (
                      <a
                        href=''
                        className='text-center call_log_link'
                        onClick={() => display_agent_logs(item.agentIdentifier)}
                      >
                        {`${user.firstName} ${user.lastName}`}{" "}
                      </a>
                    ) : (
                      ""
                    )
                  )}
                </td>
              ) : (
                "no"
              )}
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
