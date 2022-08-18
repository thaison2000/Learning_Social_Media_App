import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Group from './pages/Group';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/group" element={<Group />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
