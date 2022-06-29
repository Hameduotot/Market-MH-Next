import React, { useEffect } from "react";
import axios from "axios";
import { TitleHome } from "../components/button/styled";
import CardListItems from "../components/CardList/CardListItems";

const Home = ({ props }) => {
  console.log(props);

  return <div>{/* <CardListItems cards={props} /> */}</div>;
};

Home.getInitialProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  JSON.stringify(data);

  return { props: data };
};

export default Home;
