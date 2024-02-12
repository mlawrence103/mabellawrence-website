import Menu from './Menu';
import { useState, useEffect } from 'react';
import amr_report from '../assets/amr_report.pdf';
import amr from '../assets/amr.jpg';

const AMR = (props) => {
  return (
    <div id="amr-page" className="no-grid-project-page">
      <div className="banner-image black-and-white">
        <div className="text-banner flex-row" id="amr-banner">
          <div id="amr-banner-text">
            An college course on the programming of autonomous mobile robots
          </div>
        </div>
      </div>
      <Menu />
      <div className="project-page">
        <div className="project-info">
          <div className="project-name">AUTONOMOUS MOBILE ROBOTS</div>
          <div className="project-tech-stack flex-row">
            <div className="tech-name">MATLAB</div>
          </div>
          <div className="project-description">
            This was an educational project exploring autonomous robotics
            principles in sensing, localization, mapping and planning with the
            goal of navigating a virtual robot through a map with both known and
            unknown walls to find waypoints. The code was written in a group of
            three students for the Autonomous Mobile Robots course at Cornell
            University in 2019.
            <div className="paragraph-break"></div>
          </div>
        </div>
        <div id="amr-map">
          <img src={amr} />
        </div>
        <div id="amr-report">
          <iframe src={amr_report} />
        </div>
      </div>
    </div>
  );
};

export default AMR;
