import "./App.css";
import {
  BrowserRouter as MyRouters,
  Routes,
  Router,
  Route,
} from "react-router-dom";
import Home from "./components/Home";

import AddBlog from "./components/AddBlog";
import Storey from "./components/Storey";

import NavBar from "./components/NavBar";
import AddStorey from "./components/AddStorey";
import MyHome from "./components/MyHome";
import Footer from "./components/Footer";
import Idpage from "./components/mystorey/[id]";
import Blog from "./components/Blog";
function App() {
  return (
    <MyRouters>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/MyHome" element={<MyHome />}></Route>

        <Route path="/AddBlog" element={<AddBlog />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/storey" element={<Storey />}></Route>
        <Route path="/AddStorey" element={<AddStorey />}></Route>
        <Route path="/storey/:id" element={<Idpage />}></Route>
      </Routes>
      <Footer />
    </MyRouters>
  );
}

export default App;
