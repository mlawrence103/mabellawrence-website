import Menu from './Menu';
import vz_bridge from '../assets/verizon_bridge.jpg';
import pdf_resume from '../assets/Mabel_Lawrence_Online_Resume.pdf';

const Subpage = () => {
  return (
    <div id="resume">
      <div className="banner-image black-and-white">
        <img
          src={vz_bridge}
          alt="Ppicture of LED installation at Verizon Innovation Center in San Francisco"
        ></img>
      </div>
      <Menu />
      <button id="resume-download">
        <a href={pdf_resume} target="_blank">
          Download PDF
        </a>
      </button>
    </div>
  );
};

export default Subpage;
