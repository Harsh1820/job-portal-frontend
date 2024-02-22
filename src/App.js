import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the addition of 'Routes'

import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import JobList from './components/Jobs/JobList';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes> {/* Wrap your Route components in a Routes component */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/jobs" element={<JobList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
