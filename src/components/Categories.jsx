import { useState } from "react";

const Categories = () => {
  let [activeIndex, setActiveIndex] = useState(0);

  const onCategoryClick = (i) => {
    setActiveIndex(i);
  };

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, idx) => {
          return (
            <li
              key={idx}
              onClick={() => onCategoryClick(idx)}
              className={activeIndex === idx ? "active" : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
