import Menu from './Menu';
import { useState, useEffect } from 'react';
import newhouse_1 from '../assets/Gensler/newhouse_1.jpg';
import newhouse_2 from '../assets/Gensler/newhouse_2.jpg';
import newhouse_3 from '../assets/Gensler/newhouse_3.jpg';
import newhouse_4 from '../assets/Gensler/newhouse_4.jpg';
import newhouse_5 from '../assets/Gensler/newhouse_5.jpg';
import newhouse_6 from '../assets/Gensler/newhouse_6.jpg';
import newhouse_7 from '../assets/Gensler/newhouse_7.jpg';
import profile_vid from '../assets/Gensler/newhouse_profile.mp4';
import attract_vid from '../assets/Gensler/newhouse_attract.mp4';

const NewhousePage = (props) => {
  return (
    <div>
      <div className="banner-image black-and-white">
        <img src={newhouse_1} alt="Original picture of rocky landscape"></img>
      </div>
      <Menu />
      <div className="project-page">
        <div className="project-page-section">
          <div className="flex-col">
            <div className="image-grid">
              <div id="newhouse-img-1" className="grid-el">
                <img src={newhouse_4} id="newhouse-img-1" />
              </div>
              <div id="newhouse-img-2" className="grid-el">
                <img src={newhouse_7} id="newhouse-img-2" />
              </div>
              <div id="newhouse-img-3" className="grid-el">
                <img src={newhouse_2} id="newhouse-img-3" />
              </div>
              <div id="newhouse-img-4" className="grid-el">
                <img src={newhouse_3} id="newhouse-img-4" />
              </div>
            </div>
            <div className="asset-credit">All assets courtesy of Gensler</div>
          </div>
          <div className="project-info">
            <div className="project-name">
              PROFESSIONAL GALLERY
              <div className="project-sub-name">SYRACUSE UNIVERSITY</div>
            </div>
            <div className="project-tech-stack flex-row">
              <div className="tech-name">Node</div>
              <div className="tech-name">React</div>
              <div className="tech-name">SQLite</div>
              <div className="tech-name">WebSockets</div>
              <div className="tech-name">Redux</div>
              <div className="tech-name">CSS</div>
              <div className="tech-name">Electron</div>
              <div className="tech-name">Wagtail</div>
            </div>
            <div className="project-description">
              I was the lead developer for the professional gallery in
              Syracuse's Newhouse School of Communications.
              <div className="paragraph-break"></div>
              The professional gallery is an interactive touch screen experience
              that allows users to browse through notable alumni. The alumni can
              be browsed by name, graduation year, and major. Users can tap on a
              headshot to learn more about a specific person.
              <div className="paragraph-break"></div>
              There are three different modes for the professional gallery:
              ambient, attract, and interact. Ambient mode shows prendered
              videos and has touch events disabled. Attract mode has a
              randomized animation of headshots that invites users to tap the
              screen to enter interact mode. Interact mode is where users can
              browse through alumni.
              <div className="paragraph-break"></div>I also built out the
              Wagtail (Django-based) content management (CMS) system and the
              sync system that pulls information from the CMS for use in the
              application.
            </div>
          </div>
        </div>
        <div className="project-page-section newhouse-section">
          <div className="project-info">
            <div className="project-name">
              <div className="project-sub-name">ENTRANCE EXPEREINCE</div>
            </div>
            <div className="project-tech-stack flex-row">
              <div className="tech-name">TouchDesigner</div>
              <div className="tech-name">Python</div>
            </div>
            <div className="project-description">
              I was a secondary developer for the welcome experience in entry
              lobby the Newhouse School.
              <div className="paragraph-break"></div>
              The lobby experience was a TouchDesigner video playback
              application that queued videos pulled from the Wagtail CMS.
            </div>
          </div>
          <div className="flex-col">
            <div className="image-grid">
              <div id="newhouse-img-5" className="grid-el">
                <img src={newhouse_1} id="newhouse-img-5" />
              </div>
              <div id="newhouse-img-6" className="grid-el">
                <img src={newhouse_6} id="newhouse-img-6" />
              </div>
              <div id="newhouse-img-7" className="grid-el">
                <img src={newhouse_5} id="newhouse-img-7" />
              </div>
            </div>
            <div className="asset-credit">All assets courtesy of Gensler</div>
          </div>
        </div>
        <div className="project-page-section flex-row" id="newhouse-videos">
          <video
            className="newhouse-vid"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
          >
            <source src={profile_vid} type="video/mp4" />
          </video>
          <video
            className="newhouse-vid"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
          >
            <source src={attract_vid} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default NewhousePage;
