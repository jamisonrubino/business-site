import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { NavLink, Routes, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Services from './Components/services.js';
import Contact from './Components/contact.js';
var name = "Jamison Rubino";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavLink 
          className="App-link text-info"
          to="/"
        >
          {name}
        </NavLink>
        <h6 className="text-light">Home and Office Improvement</h6>
        <nav>
        <ul style={{paddingLeft: 0}} className="mt-0">
          {/* <li className="px-2">
            <NavLink to="/Home" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-info" : ""}>Home</NavLink> 
          </li> */}
          <li className="px-2">
            <NavLink to="/" 
            className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-info" : ""}>Services</NavLink>
          </li>
          <li className="px-2">
            <NavLink to="/Contact" className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-info" : ""}>Contact</NavLink>
          </li>
        </ul>
        </nav>
      </header>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
