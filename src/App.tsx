import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import { About } from "./pages/About";


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about/" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
