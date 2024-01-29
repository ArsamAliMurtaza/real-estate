import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import About from "./pages/About";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <route path="/" element={<Home />} />
    <route path="/sign-in" element={<Signin />} />
    <route path="/sign-up" element={<Signup />} />
    <route path="/profile" element={<Profile />} />
    <route path="/about" element={<About />} />

    </Routes>
    </BrowserRouter>
  )
}
