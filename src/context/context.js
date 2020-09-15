import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

/*
    creating context is essential
    as this is a global data. plus
    we dont have to pass it-down top-to-bottom.
  */

const GithubContext = React.createContext();

//accessing via. gitContext.Provider rather than props.

const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={"hello"}>{children}</GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
