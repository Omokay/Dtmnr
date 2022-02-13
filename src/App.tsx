import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from "./pages/landing/landing.page";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/' element={<Landing/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
