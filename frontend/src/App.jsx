import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import Home from './components/Home.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

