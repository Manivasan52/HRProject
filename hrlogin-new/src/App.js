import logo from './logo.svg';
import './App.css';
import LoginPage from './hrloginpage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';


function App() {
  return (
    // <div>

    // <LoginPage/>
    // </div>
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
