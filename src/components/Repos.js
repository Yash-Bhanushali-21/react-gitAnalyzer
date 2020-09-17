import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  /*
  fetch repos data from the context.
  */
  const { repos } = React.useContext(GithubContext);
  /*using hashmap concept, we return count of each lagnauge
  dynamically using es6 reduce() */
  let languages = repos.reduce((arr, item) => {
    let { language } = item;
    if (!language) return arr;
    if (!arr[language]) {
      arr[language] = { label: language, value: 1 };
    } else {
      arr[language] = {
        ...arr[language],
        value: arr[language].value + 1
      };
    }
    return arr;
  }, {});
  /*since we just want the values now,
  as values are the objects, we extract them */
  languages = Object.values(languages);

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* testing chart.
       <ExampleChart data={chartData} />
       */}
        <Pie3D data={languages} />
      </Wrapper>
    </section>
  );
  //<ExampleChart />;
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
