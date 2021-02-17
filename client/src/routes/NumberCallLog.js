import React, { useEffect, useContext, useState, Component } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";

const NumberCallLog = () => {
  const [CallNumber, setNumber] = useState([]);
  const [logs, setLogs] = useState([]);
  const [agent, setAgents] = useState([]);
  const number = useParams();
  const history = useHistory();
  //   console.log(number);
  useEffect(() => {
    const fetchNumber = async () => {
      const result = await axios(`/call/${"number"}`);
      setNumber(result.data);
    };
    fetchNumber();
    console.log(CallNumber);
    // =====================================================================================================
    const fetchLogs = async () => {
      const result = await axios(`/call/${number.number}`);
      setLogs(result.data);
    };
    fetchLogs();
    console.log("test", JSON.stringify(CallNumber));
    // =====================================================================================================
    const fetchAgent = async () => {
      const result = await axios(`/agent`);

      setAgents(result.data);
    };
    fetchAgent();
    console.log("agents", agent);
  }, []);
  console.log(agent.map((user) => user.firstName));

  function SecondsToMinutes(value) {
    value = Number(value);
    var minutes = Math.floor((value % 3600) / 60);
    var seconds = Math.floor((value % 3600) % 60);
    return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  }

  const display_agent_logs = (identifier) => {
    history.push(`/agent/${identifier}`);
  };

  return (
    <div className='page'>
      <h1 className='font-weight-light display-4 text-center mt-3 mb-3'>
        Call log for number
      </h1>
      <h2 className='font-weight-light text-center mb-2'>{number.number}</h2>
      <Link to="/" >
        <button className='btn btn-info mt-2 mb-4 align-self-center'>Home</button>
      </Link>
      <div className='container'>
        <table className='table table-hover table-striped border'>
          <thead>
            <tr className='bg-primary text-light'>
              <th scope='col' className='text-center'>
                Agent
              </th>
              <th scope='col' className='text-center'>
                Call Date and Time
              </th>
              <th scope='col' className='text-center'>
                Call Length
              </th>
            </tr>
          </thead>
          <tbody>
            {logs.map((item) => (
              <tr key={item.identifier}>
                {agent.filter(
                  (user1) => user1.identifier === item.agentIdentifier
                ) ? (
                  <td className='text-center'>
                    {agent.map((user) =>
                      user.identifier === item.agentIdentifier ? (
                        <a
                          href=''
                          className='text-center call_log_link'
                          onClick={() =>
                            display_agent_logs(item.agentIdentifier)
                          }
                        >{`${user.firstName} ${user.lastName}`}</a>
                      ) : (
                        ""
                      )
                    )}
                  </td>
                ) : (
                  "no"
                )}

                <td className='text-center'>
                  {" "}
                  {item.dateTime.split("T").join(" ").replace(".000Z", " ")}
                </td>
                <td className='text-center'>
                  {SecondsToMinutes(item.duration)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NumberCallLog;
