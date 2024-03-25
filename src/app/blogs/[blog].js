import React from "react";
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  return { title: product.title };
}
const blog = () => {
  return <div>{blog}</div>;
};

export default blog;
