import React from "react";
import { useEffect, useState } from "react";

import Categories from "../Categories";
import MyLoader from "../MyLoader";
import PizzaBlock from "../PizzaBlock";
import Sort from "../Sort";

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://62bb14a0573ca8f832926bb0.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading && [...new Array(6)].map((el) => <MyLoader />)}
        {!loading &&
          data &&
          data.map((data, idx) => {
            return <PizzaBlock key={idx} {...data} />;
          })}
      </div>
    </>
  );
};

export default Home;
