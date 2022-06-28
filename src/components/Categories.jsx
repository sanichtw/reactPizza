import { useState } from "react";

const Categories = ({ onSortClick, categories }) => {
  let [activeIndex, setActiveIndex] = useState(0);

  const onCategoryClick = (i) => {
    setActiveIndex(i);
    onSortClick(i);
  };

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
