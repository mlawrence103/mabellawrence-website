import Menu from './Menu';
import { useState, useEffect } from 'react';
import tnw_icon from '../assets/tnw_icon.png';
import tnw_recording from '../assets/tnw_scan_recording.gif';

const TasteNotWaste = (props) => {
  return (
    <div id="tnw-page" className="no-grid-project-page">
      <div className="banner-image black-and-white">
        <div
          className="text-banner flex-row taste-not-waste-font"
          id="tnw-banner"
        >
          <div id="tnw-banner-text">
            Did you know that 40% of food in America goes to waste?
            <a
              id="tnw-source"
              className="pos-abs"
              href="https://www.usda.gov/foodwaste/faqs"
            >
              usda.gov
            </a>
          </div>
          <img src={tnw_icon} />
        </div>
      </div>
      <Menu />
      <div className="project-page">
        <div className="project-info">
          <div className="project-name">TASTE NOT WASTE</div>
          <div className="project-tech-stack flex-row">
            <div className="tech-name">React Native</div>
            <div className="tech-name">Redux</div>
            <div className="tech-name">Firebase</div>
            <div className="tech-name">Google Vision</div>
            <div className="tech-name">CSS</div>
            <div className="tech-name">Edamam API</div>
          </div>
          <div className="project-description">
            Taste Not Waste is a mobile application that helps users reduce food
            waste by alerting them when uploaded grocery items will expire and
            suggesting recipes using the relevant ingredients. This was built
            with a team of four developers for the Grace Hopper Program.
            <div className="paragraph-break"></div>
            Users can add items to their "fridge" by either scanning a receipt
            or manual input.The app can estimate when each item will expire, or
            a user can input the expiration date on the packaging. The app also
            sends notifications to remind users about their items that are
            expiring soon and will suggest recipes using that item.
            <div className="paragraph-break"></div>
            My responsibilites included implementing Google Vision OCR to parse
            food names from line items from uploaded or scanned receipt, and
            setting up the pre-populated form in React Native to allow users to
            view and edit uploaded items before saving them.
          </div>
        </div>
        <div id="tnw_recording">
          <img src={tnw_recording} />
        </div>
      </div>
    </div>
  );
};

export default TasteNotWaste;
