import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie2D, Column2D, Bar2D, Doughnut2D } from "./Charts";
const Repos = () => {
  /*
  fetch repos data from the context.
  */
  const { repos } = React.useContext(GithubContext);
  /*using hashmap concept, we return count of each lagnauge
  dynamically using es6 reduce()
  arr acts as an accumulator and its starting val is an 
  empty obj.
  https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
   */
  let languages = repos.reduce((arr, item) => {
    let { language, stargazers_count } = item;
    if (!language) return arr;
    if (!arr[language]) {
      arr[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      arr[language] = {
        ...arr[language],
        value: arr[language].value + 1,
        stars: arr[language].stars + stargazers_count
      };
    }
    return arr;
  }, {});
  /*since we just want the values now,
  as values are the objects, we extract them */
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  //Most stars per langugage

  //here we sort based on strs.
  //then, we know that chart looks for value prop.
  // so over-ride it with our starts prop.
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);
  console.log(mostPopular);
  //

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* testing chart.
       <ExampleChart data={chartData} />
       */}
        <Pie2D data={mostUsed} />
        <Column2D data={mostUsed} />
        <Doughnut2D data={mostPopular} />
        <Bar2D data={mostUsed} />
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
