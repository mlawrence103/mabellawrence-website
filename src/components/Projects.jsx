import rock_landscape from '../assets/rock_landscape.jpg';
import Menu from './Menu';
import jrm from '../assets/Gensler/jrm_1.jpg';
import newhouse from '../assets/Gensler/newhouse_2.jpg';
import vzsf from '../assets/Gensler/vzsf_1.jpg';
import amr from '../assets/amr_cover.png';
import mitw from '../assets/mitw.png';
import tnw_icon from '../assets/tnw_icon.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const projectsSections = document.getElementsByClassName(
      'project-gallery-section'
    );
    for (let i = 0; i < projectsSections.length; i++) {
      const el = projectsSections[i];
      const id = el.id;
      const elTitle = document.getElementById(`${id}-title`);
      if (elTitle) {
        if (matchMedia('(pointer:fine)').matches) {
          el.addEventListener('mouseover', (e) => {
            elTitle.style.opacity = 1;
          });
          el.addEventListener('mouseout', (e) => {
            elTitle.style.opacity = 0;
          });
        } else {
          elTitle.style.opacity = 1;
        }
      }
    }
  }, []);

  return (
    <div>
      <div className="banner-image">
        <img
          src={rock_landscape}
          alt="Original picture of rocky landscape"
        ></img>
      </div>
      <Menu />
      <div id="projects-overview-gallery" className="centered-columns">
        <div
          className="flex-row project-gallery-section"
          id="vz-section"
          onClick={() => navigate('/projects/verizon')}
        >
          <div className="project-gallery-title pos-abs" id="vz-section-title">
            Verizon Innovation Center
          </div>
          <img className="project-cover" src={vzsf} />
          <p
            className="pos-abs project-page-credit"
            style={{ color: '#ffffff' }}
          >
            Photo courtesy of Gensler
          </p>
        </div>
        <div
          className="flex-row project-gallery-section"
          id="jrm-section"
          onClick={() => navigate('/projects/jackie-robinson-museum')}
        >
          <div className="project-gallery-title pos-abs" id="jrm-section-title">
            Jackie Robinson Museum
          </div>
          <img className="project-cover" src={jrm} />
          <p className="pos-abs project-page-credit" style={{ color: 'black' }}>
            Photo courtesy of Gensler
          </p>
        </div>
        <div
          className="flex-row project-gallery-section"
          id="newhouse-section"
          onClick={() => navigate('/projects/newhouse')}
        >
          <div
            className="project-gallery-title pos-abs"
            id="newhouse-section-title"
          >
            Newhouse School of Communications
          </div>
          <img className="project-cover" src={newhouse} />
          <div className="pos-abs project-page-credit">
            <div
              style={{
                color: 'black',
                backgroundColor: 'white',
                width: 'fit-content',
                paddingRight: '.5rem',
              }}
            >
              Photo courtesy of Gensler
            </div>
          </div>
        </div>
        <div
          className="flex-row project-gallery-section project-gallery-no-image"
          id="tnw-section"
          onClick={() => navigate('/projects/taste-not-waste')}
        >
          <div className="project-gallery-title pos-abs" id="tnw-section-title">
            Taste Not Waste: Mobile App
          </div>
          <div className="project-cover flex-row">
            <div className="taste-not-waste-font flex-col no-image-cover-text">
              A mobile app to help you reduce your food waste
            </div>
            <img id="tnw-logo" src={tnw_icon} />
          </div>
        </div>
        <div
          className="flex-row project-gallery-section project-gallery-no-image"
          id="mitw-section"
          onClick={() => navigate('/projects/meet-in-the-middle')}
        >
          <div
            className="project-gallery-title pos-abs"
            id="mitw-section-title"
          >
            Meet in the Middle: Web App Exploration
          </div>
          <div className="project-cover flex-row">
            <div className="flex-col no-image-cover-text" id="mitw-cover-text">
              A an activity finder that reduces travel time
            </div>
            <img id="mitw-screenshot" src={mitw} />
          </div>
        </div>

        <div
          className="flex-row project-gallery-section project-gallery-no-image"
          id="amr-section"
          onClick={() => navigate('/projects/autonomous-mobile-robots')}
        >
          <div className="project-gallery-title pos-abs" id="amr-section-title">
            Autonomous Mobile Robot: Educational Project
          </div>
          <div className="project-cover flex-row">
            <div className="flex-col no-image-cover-text" id="amr-cover-text">
              A course on autonmous robot sensing, localization, mapping, motion
              and path planning, obstacle and collision avoidance.
            </div>
            <img id="amr-screenshot" src={amr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
