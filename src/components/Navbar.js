import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  return (
    <Wrapper>
      <h4>Git User Inspector</h4>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  width: 100%;
  text-align: center;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: bold;
    text-align: center;
    border: 1px solid blue;
    padding: 10px 50px;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
