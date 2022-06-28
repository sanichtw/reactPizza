import { useEffect, useState } from "react";
import "./app.scss";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import Spinner from "./components/Spinner";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [sortedData, setSortedData] = useState();

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const getData = async () => {
    const response = await fetch(
      "https://62bb14a0573ca8f832926bb0.mockapi.io/items"
    );
    const data = await response.json();
    console.log("fetch");
    setData(data);
    setLoading(false)
  };
  console.log(111);
  useEffect(() => {
    getData()
    console.log("useeffect");
  }, []);

  const onSortClick = (categoryIdx) => {
    if (categoryIdx === 0) return setSortedData(data);
    const sorted = data.filter((item) => item.category === categoryIdx);
    setSortedData(sorted);
  };

  return (
    <div className="wrapper">
      {console.log("render")}
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories onSortClick={onSortClick} categories={categories} />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {loading && <Spinner />}
            {!loading &&
              data &&
              !sortedData &&
              data.map((data, idx) => {
                return <PizzaBlock key={idx} {...data} />;
              })}
            {sortedData &&
              sortedData.map((data, idx) => {
                return <PizzaBlock key={idx} {...data} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
