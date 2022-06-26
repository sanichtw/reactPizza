import { useState } from "react";

const Categories = () => {
  let [activeIndex, setActiveIndex] = useState(0);

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
              onClick={() => setActiveIndex((activeIndex = idx))}
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
