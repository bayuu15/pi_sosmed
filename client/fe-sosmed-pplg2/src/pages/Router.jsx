import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Register from "./Register";
// import Main from "./Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      {/* <Route path="/Main" element={<Main />} /> */}
    </Routes>
  );
};

export default Router;
