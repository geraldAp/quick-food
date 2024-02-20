import { Routes, Route } from "react-router-dom";
import Home from "./app/Home";
import About from "./app/About";
import Contact from "./app/Contact";
import Cart from "./app/Cart";
import Meals from "./app/Meals";
import Layout from "./components/Layout";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/all-meals" element={<Meals />} />
      </Routes>
    </Layout>
  );
};

export default App;
