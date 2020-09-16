import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

//api we will be calling for user.
const rootUrl = "https://api.github.com";

/*
    creating context is essential
    as this is a global data. plus
    we dont have to pass it-down top-to-bottom.
  */

const GithubContext = React.createContext();

//accessing via. gitContext.Provider rather than props.

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return (
    //this means if we get
    //req as githubuser:it wwill set github user.
    //githubuser:this_scopes_githubuser
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
