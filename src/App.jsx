import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Course from './components/Course';
import CourseDetail from './components/CourseDetail'; // Import CourseDetail
import Notes from './components/Notes';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/coursedetail/:id" element={<CourseDetail />} /> {/* Add CourseDetail route */}
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
