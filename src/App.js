import { Route, Routes } from "react-router-dom";

import "./app.scss";

import Header from "./components/Header";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
