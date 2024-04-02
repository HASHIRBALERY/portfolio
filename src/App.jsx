import AOS from "aos";
import "aos/dist/aos.css";
import MainPage from "./Page/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Achiement from "./Components/Achiement";
import Achieved from "./Components/Achieved";


AOS.init();

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/about" element={<About />} />
        <Route path="/achievement" element={<Achieved />} />
        
    </Routes>
  </BrowserRouter>
  )
}