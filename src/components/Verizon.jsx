import Menu from './Menu';
import { useState, useEffect } from 'react';
import vzsf_1 from '../assets/Gensler/vzsf_1.jpg';
import vzsf_2 from '../assets/Gensler/vzsf_2.jpg';
import vzsf_3 from '../assets/Gensler/vzsf_3.jpg';
import vzsf_4 from '../assets/Gensler/vzsf_4.jpg';
import vzsf_6 from '../assets/Gensler/vzsf_6.jpg';
import vzsf_vid from '../assets/Gensler/vzsf_vid.mp4';

const VerizonPage = (props) => {
  return (
    <div>
      <div className="banner-image black-and-white">
        <img src={vzsf_1} alt="Picture of verizon bridge installation"></img>
      </div>
      <Menu />
      <div className="project-page">
        <div className="project-page-section">
          <div className="image-grid">
            <div id="vz-img-1" className="grid-el">
              <img src={vzsf_4} id="vz-img-1" />
            </div>
            <div id="vz-img-2" className="grid-el">
              <img src={vzsf_3} id="vz-img-2" />
            </div>
            <div id="vz-img-3" className="grid-el">
              <img src={vzsf_6} id="vz-img-3" />
            </div>
            <div id="vz-img-4" className="grid-el">
              <img src={vzsf_2} id="vz-img-4" />
            </div>
          </div>
          <div className="project-info">
            <div className="project-name">VERIZON INNOVATION CENTER</div>
            <div className="project-tech-stack flex-row">
              <div className="tech-name">Python</div>
              <div className="tech-name">OpenCV</div>
              <div className="tech-name">NumPy</div>
            </div>
            <div className="project-description">
              I developed the video playback code for the immersive audio-visual
              "Bridge" touchpoint at the Verizon Innovation Center in San
              Francisco.
              <div className="paragraph-break"></div>
              This experience coordinates video playback across LED strips in
              the ceiling with updatable text on a "floating" LCD screen behind
              a two-way mirror. Users can display various content organized into
              chapters through a Crestron tablet that sends web socket messages
              to the experience application.
              <div className="paragraph-break"></div>
              The ceiling content is running in a Python OpenCV window. Content
              mapping to the physical LED strip spacing and transitions between
              chapters are managed using NumPy calculations. The LCD screen
              content is a simple HTML web app that receives relayed from the
              Python application.
            </div>
          </div>
        </div>
        <video
          id="vzsf-vid"
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source src={vzsf_vid} type="video/mp4" />
        </video>
        <div className="asset-credit">All assets courtesy of Gensler</div>
      </div>
    </div>
  );
};

export default VerizonPage;
