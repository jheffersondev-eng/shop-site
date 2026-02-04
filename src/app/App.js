import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home/Home';
import StorePage from '../pages/Store/StorePage';
import './App.css';
import '../styles/skeletons.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store/:storeId" element={<StorePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
