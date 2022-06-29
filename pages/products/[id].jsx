import axios from "axios";
import React from "react";

const Product = ({ props }) => {
  console.log(props);
  return <div>Product</div>;
};

Product.getInitialProps = async ({ query }) => {
  const { id } = query;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  JSON.stringify(data);

  return { props: data };
};
export default Product;
