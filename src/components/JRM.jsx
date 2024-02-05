import Menu from './Menu';
import { useState, useEffect } from 'react';
import jrm_1 from '../assets/Gensler/jrm_1.jpg';
import jrm_2 from '../assets/Gensler/jrm_2.jpg';
import jrm_3 from '../assets/Gensler/jrm_3.jpg';
import jrm_4 from '../assets/Gensler/jrm_4.jpg';
import jrm_5 from '../assets/Gensler/jrm_5.jpg';
import jrm_9 from '../assets/Gensler/jrm_9.jpg';
import jrm_7 from '../assets/Gensler/jrm_7.jpg';
import jrm_8 from '../assets/Gensler/jrm_8.jpg';

const JRMPage = (props) => {
  return (
    <div>
      <div className="banner-image black-and-white">
        <img src={jrm_1} alt="Original picture of rocky landscape"></img>
      </div>
      <Menu />
      <div className="project-page">
        <div className="project-page-section">
          <div className="flex-col">
            <div className="image-grid">
              <div id="jrm-img-1" className="grid-el">
                <img src={jrm_8} id="jrm-img-1" />
              </div>
              <div id="jrm-img-2" className="grid-el">
                <img src={jrm_7} id="jrm-img-2" />
              </div>
              <div id="jrm-img-3" className="grid-el">
                <img src={jrm_5} id="jrm-img-3" />
              </div>
            </div>
            <div className="asset-credit">All assets courtesy of Gensler</div>
          </div>
          <div className="project-info">
            <div className="project-name">
              JACKIE ROBINSON MUSEUM
              <div className="project-sub-name">GAME DAY</div>
            </div>
            <div className="project-tech-stack flex-row">
              <div className="tech-name">Node</div>
              <div className="tech-name">Wagtail</div>
              <div className="tech-name">React</div>
              <div className="tech-name">WebSockets</div>
              <div className="tech-name">Redux</div>
              <div className="tech-name">CSS</div>
              <div className="tech-name">Electron</div>
            </div>
            <div className="project-description">
              I developed the interactive touch screen application for the Game
              Day Exhibit at the Jackie Robinson Museum in New York City.
              <div className="paragraph-break"></div>
              This application allows users to browser content structured into
              books, chapters, and stories. Each story can be added to a
              "playlist", and when the item reaches the top of the playlist
              content is played back on the exhibit's LED screen and in the
              projection mapped on to the model of Ebbet's Field.
              <div className="paragraph-break"></div>
              There are two screens running the same application, and the queue
              is updateable and synced between both instances.
              <div className="paragraph-break"></div>
              Content is pulled from the local Wagtail (Django-based)
              content-management system. I worked with the backend developer to
              set up the data structure needed for this experience and what
              types of API queries I needed exposed.
            </div>
          </div>
        </div>
        <div className="project-page-section jrm-exhibit-section">
          <div className="project-info">
            <div className="project-name">
              <div className="project-sub-name">LEGACY OF IMPACT</div>
            </div>
            <div className="project-tech-stack flex-row">
              <div className="tech-name">HTML</div>
              <div className="tech-name">CSS</div>
              <div className="tech-name">Electron</div>
              <div className="tech-name">Nginx</div>
            </div>
            <div className="project-description">
              I also developed the simple HTML video playback application for
              the Legacy of Impact Exhibit.
              <div className="paragraph-break"></div>
              This exhibit consists of 42 touch tablets - representing Jackie
              Robinson's jersey number. The "attract" state of the application
              is a looping video without sound, and when a user taps on a
              screen, the tablet plays an interview with sound that came through
              an attached earpiece. After the video ends, the application goes
              back into attract mode.
              <div className="paragraph-break"></div>
              Each tablet has the same application, but each points to a unique
              url hosted by nginx that indicates which video should play on each
              tablet.
            </div>
          </div>
          <div className="flex-col">
            <div className="image-grid">
              <div id="jrm-img-4" className="grid-el">
                <img src={jrm_9} id="jrm-img-4" />
              </div>
              <div id="jrm-img-5" className="grid-el">
                <img src={jrm_4} id="jrm-img-5" />
              </div>
              <div id="jrm-img-6" className="grid-el">
                <img src={jrm_3} id="jrm-img-6" />
              </div>
            </div>
            <div className="asset-credit">All assets courtesy of Gensler</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JRMPage;
