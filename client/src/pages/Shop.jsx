import React from "react";
import Product from "../components/Product/index";
import Search from "../components/Search/index";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../utils/queries";

const Shop = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  return (
    <div className="lg:flex bg-[#bab5a1]">
      <div className="flex justify-center p-4 lg:max-w-[25%]">
        <Search />
      </div>
      <div className="w-full bg-[#DAD7CD]">
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 ">
          {" "}
          {/* Dynamically rendered from database */}
          {/* <Product /> */}
          {data.items.map((item) => (
            <Product key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
