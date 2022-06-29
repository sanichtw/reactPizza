import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <div className="pizza-block">
    <ContentLoader
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="134" cy="103" r="98" />
      <rect x="33" y="219" rx="10" ry="10" width="212" height="25" />
      <rect x="7" y="261" rx="10" ry="10" width="260" height="60" />
      <rect x="6" y="348" rx="10" ry="10" width="76" height="29" />
      <rect x="145" y="343" rx="10" ry="10" width="123" height="42" />
    </ContentLoader>
  </div>
);

export default MyLoader;
