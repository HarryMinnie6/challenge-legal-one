import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import CallLogs from "../apis/CallLogs";

function AgentProfile() {
  const [singleAgent, setSingleAgent] = useState([]);
  const [agents, setAgents] = useState([]);
  const agentIdentifier = useParams();
  const history = useHistory();
  console.log(agentIdentifier);
  useEffect(() => {
    const fetchSingleAgent = async () => {
      const result = await CallLogs.get(`/agent/${agentIdentifier.identifier}`);
      setSingleAgent(result.data);
    };
    fetchSingleAgent();
    //=========================================================================================
    const fetchAgent = async () => {
      const result = await CallLogs.get(`/agent`);

      setAgents(result.data);
    };
    fetchAgent();
    console.log("agents", agents);
    console.log("single", singleAgent);
  }, []);

  return (
    <div className='container page'>
      {agents.filter(
        (user1) => user1.identifier === agentIdentifier.identifier
      ) ? (
        <div className='font-weight-light text-center mb-2 container page mt-5'>
          {agents.map((user) =>
            user.identifier === agentIdentifier.identifier ? (
              <div className='profile_card  border'>
                <img src={`${user.photo}`} />
                <h1 className='m-3'>{`${user.firstName} ${user.lastName}`}</h1>
                <p className='font-weight-light mt-4 mb-5'>
                  email: {`${user.email} `}
                </p>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      ) : (
        "No Agent Name"
      )}
      <div>
        <Link to=''>
          <button
            className='btn btn-info mt-2 mb-4 align-self-center'
            onClick={() => history.goBack()}
          >
            Back
          </button>
        </Link>
        <Link to='/'>
          <button className='btn btn-info m-2 mt-2 mb-4 align-self-center'>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AgentProfile;
