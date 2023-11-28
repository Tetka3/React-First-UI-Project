import "./App.css";
import Sidebar from "./components/Sidebar"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Performance from "./pages/Performance";
import Setting from "./pages/Setting";
import Support from "./pages/Support";


function App() {
  return (
    
    <div className="App">
      <Router>
          <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
