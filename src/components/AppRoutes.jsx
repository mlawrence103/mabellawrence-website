import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './LandingPage';
import Projects from './Projects';
import NotFound from './NotFound.jsx';
import Verizon from './Verizon';
import JRM from './JRM';
import Newhouse from './Newhouse';
import TNW from './TNW';

const AppRoutes = () => {
  const exampleProps = { arr: [], obj: {}, str: 'Hello World' };
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/projects/verizon" element={<Verizon />} />
        <Route exact path="/projects/jrm" element={<JRM />} />
        <Route exact path="/projects/newhouse" element={<Newhouse />} />
        <Route exact path="/projects/taste-not-waste" element={<TNW />} />
        <Route path="*" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
