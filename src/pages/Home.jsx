import React, { useContext } from "react";
import { Context } from "../components/Context";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const { loading, data } = useContext(Context);

  return (
    <div className="max-w-6xl mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-3">
          {data.map((item, index) => (
            <Product key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
