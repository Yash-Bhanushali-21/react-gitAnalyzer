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
  //requests and loading.
  const [requests, setRequests] = useState(0); //keep limit by 0 as def.
  const [loading, isLoading] = useState(false); //boolean tracker for loading.
  //error state handle.
  const [error, setError] = useState({ show: false, msg: "" });
  function toggleError(show, msg) {
    setError({ show, msg });
    console.log(error);
  }

  const searchGithubUser = async (user) => {
    console.log(user);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    console.log(response);
    if (response) {
      setGithubUser(response.data);
    } else {
      toggleError(true, "no such user found");
    }
  };
  //checking if we still have rate limit left.
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data: { rate } }) => {
        let { remaining } = rate;
        // remaining = 0;
        // console.log(remaining);
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "you have exhausted requests");
        }
      })
      .catch((err) => console.log(err));
  };
  //useEffect for triggering action as soon as dom is rendered.
  useEffect(checkRequests, []);

  return (
    //this means if we get
    //req as githubuser:it wwill set github user.
    //githubuser:this_scopes_githubuser
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
