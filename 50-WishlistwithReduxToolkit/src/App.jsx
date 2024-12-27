import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/register/Register";
import Home from "./pages/Home";
import LoginPage from "./login/Login";
import About from "./pages/About";
import { UserProvider } from "./context/UserProvider";
import WishlistPage from "./pages/WishlistPage";
import Basket from "./pages/Basket";

function App() {
  return (
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Router>
      </UserProvider>
  );
}

export default App;
