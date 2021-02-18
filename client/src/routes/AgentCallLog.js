import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import CallLogs from "../apis/CallLogs";

const AgentCallLog = () => {
  const [agentLogs, setAgentLogs] = useState([]);
  const [agent, setAgents] = useState([]);
  const [logs, setLogs] = useState([]);
  const [resolution, setResolution] = useState([]);
  const agentIdentifier = useParams();
  const history = useHistory();
  console.log("agentIdentifier", agentIdentifier.identifier);

  useEffect(() => {
    //===============================================================================================
    const fetchAgent = async () => {
      const result = await CallLogs.get(`/agent`);

      setAgents(result.data);
    };
    fetchAgent();
    console.log("agents", agent);
    //==================================================================================================
    const fetchLogs = async () => {
      const result = await CallLogs.get(`/logs`);
      setLogs(result.data);
    };
    fetchLogs();
    console.log("test", JSON.stringify(logs));
    //==================================================================================================
    const fetchResolution = async () => {
      const result = await CallLogs.get(`/resolution`);
      setResolution(result.data);
    };
    fetchResolution();
    console.log("test", JSON.stringify(logs));
  }, []);

  let filteredLogs = logs.filter(
    (user1) => user1.agentIdentifier === agentIdentifier.identifier
  );


  console.log("filteredLogs", filteredLogs);
  console.log(
    "resolution",
    resolution.map((item) => item.identifier)
  );

  const display_call_logs = (number) => {
    history.push(`/call/${number}`);
  };
  const display_agent_profile = (identifier) => {
    history.push(`/agent/profile/${identifier}`);
  };

  function SecondsToMinutes(value) {
    value = Number(value);
    var minutes = Math.floor((value % 3600) / 60);
    var seconds = Math.floor((value % 3600) % 60);
    return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  }

  return (
    <div className='page container'>
      <h1 className='font-weight-light display-4 text-center mt-3 mb-3'>
        Call log for
      </h1>
      {agent.filter(
        (user1) => user1.identifier === agentIdentifier.identifier
      ) ? (
        <h2 className='font-weight-light text-center mb-2'>
          {agent.map((user) =>
            user.identifier === agentIdentifier.identifier
              ? `${user.firstName} ${user.lastName}`
              : ""
          )}
        </h2>
      ) : (
        "No Agent Name"
      )}
      <div>
        <Link to='/'>
          <button className='btn btn-info mt-2 mb-4 align-self-center'>
            Home
          </button>
        </Link>
        <Link onClick={() => display_agent_profile(agentIdentifier.identifier)}>
          <button className='btn btn-success m-2 mt-2 mb-4 align-self-center'>
            View profile
          </button>
        </Link>
      </div>

      <table className='table table-hover table-striped border'>
        <thead>
          <tr className='bg-primary text-light'>
            <th scope='col' className='text-center '>
              Phone Number
            </th>
            <th scope='col' className='text-center'>
              Call Date and Time
            </th>
            <th scope='col' className='text-center'>
              Call Duration
            </th>
            <th scope='col' className='text-center'>
              Resolution
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.map((item) => (
            <tr key={item.identifier}>
              <td className='text-center'>
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
              <td className='text-center'>{SecondsToMinutes(item.duration)}</td>
              <td className='text-center'>
                {resolution.map((res) =>
                  res.identifier === item.identifier ? res.resolution : ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentCallLog;
