import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Register from "./Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};

export default Router;
