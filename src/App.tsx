import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import Products from "./pages/Products";
import AuthPage from "./pages/AuthPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>          {/* layout wraps all child routes */}
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="productos" element={<Products />} />
          <Route path="Login" element={<AuthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
