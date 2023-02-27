import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './LandingPage';
import Resume from './Resume';
import NotFound from './NotFound.jsx';

const AppRoutes = () => {
  const exampleProps = { arr: [], obj: {}, str: 'Hello World' };
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route path="*" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
