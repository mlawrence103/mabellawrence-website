import Menu from './Menu';
import { useState, useEffect } from 'react';
import tnw_icon from '../assets/tnw_icon.png';
import tnw_recording from '../assets/tnw_recording.gif';

const MeetInTheMiddle = (props) => {
  return (
    <div id="mitw-page" className=" no-grid-project-page">
      <div className="banner-image black-and-white">
        <div className="text-banner flex-row" id="mitw-banner">
          <div id="mitw-banner-text">
            A an activity finder that reduces travel time
          </div>
        </div>
      </div>
      <Menu />
      <div className="project-page">
        <div className="project-info">
          <div className="project-name">MEET IN THE MIDDLE</div>
          <div className="project-tech-stack flex-row">
            <div className="tech-name">React</div>
            <div className="tech-name">Redux</div>
            <div className="tech-name">Mapbox API</div>
            <div className="tech-name">Yelp API</div>
            <div className="tech-name">CSS</div>
          </div>
          <div className="project-description">
            Meet in the Middle is a web application for finding a meeting spot,
            and nearby activities, that balances travel time with varied transit
            methods from two addresses.
            <div className="paragraph-break"></div>I integrated Mapbox and Yelp
            APIs to render dynamic map and highly rated restaurant suggestions
            neat meetup, and determined the formula to produce meeting point
            that best accounted for average paces by car, foot, and bike.
            <div className="paragraph-break"></div>
            This was a weeklong hackathon project created for the Grace Hopper
            Program.
          </div>
        </div>
        <div id="mitw-video">
          <iframe
            src="https://www.youtube.com/embed/kDL4QQnQzS0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MeetInTheMiddle;
