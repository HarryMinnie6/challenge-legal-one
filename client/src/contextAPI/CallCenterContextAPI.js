import React, { useState, createContext } from "react";

export const CallCenterContextAPI = createContext();

export const CallCenterContextAPIProvider = (props) => {
  const [logs, setLogs] = useState([]);
  return (
    <CallCenterContextAPI.Provider value={{ logs, setLogs }}>
      {props.children}
    </CallCenterContextAPI.Provider>
  );
};
