import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/register/Register";
import Home from "./pages/Home";
import LoginPage from "./login/Login";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { UserProvider } from "./context/UserProvider";
import Todo from "./pages/Todo";

function App() {
  return (
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </Router>
      </UserProvider>
  );
}

export default App;
