import logo from "./logo.svg";
import "./App.css";
import BlogPost from "./BlogPost";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Layout from "./Layout";
import LoginPage from "./component/LoginPage";
import Registerpage from "./component/Registerpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BlogPost />} />
        <Route path={"/login"} element={<LoginPage />}></Route>
        <Route path={"/register"} element={<Registerpage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
