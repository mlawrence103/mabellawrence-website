import Menu from "./Menu";
import vz_bridge from "../assets/verizon_bridge.jpg";
import pdf_resume from "../assets/Mabel_Lawrence_Online_Resume.pdf";
import config from "../config";

const Subpage = () => {
  return (
    <div id="resume-wrapper">
      <div className="banner-image black-and-white">
        <img
          src={vz_bridge}
          alt="Picture of LED installation at Verizon Innovation Center in San Francisco"
        ></img>
      </div>
      <Menu />
      <div id="resume">
        <div className="resume-section-header">TECHINICAL SKILLS</div>
        <div className="resume-section-divider"></div>
        <div id="technical-skills-list" className="flex-row">
          {config.technical_skills.map((skill, idx) => {
            return (
              <div key={skill} className="technical-skill">
                {idx > 0 ? ", " : ""}
                {skill}
              </div>
            );
          })}
        </div>
        <div className="resume-section-header">PROFESSIONAL EXPERIENCE</div>
        <div className="resume-section-divider"></div>
        {config.professional_experience.map((exp, idx) => {
          return (
            <div
              className="professional-experience"
              key={`professional_experience_${idx}`}
            >
              <div className="experience-header flex-row">
                <div className="company-role flex-row">
                  <div className="resume-company">{exp.company}</div>
                  <div className="company-role-divider">|</div>
                  <div className="resume-role">{exp.role}</div>
                </div>
                <div className="resumt-dates">
                  {exp.start_date} - {exp.end_date}
                </div>
              </div>
              <ul className="resume-professional-achievements">
                {exp.achievements.map((point, ptIdx) => {
                  return <li key={`achievement-${ptIdx}`}>{point}</li>;
                })}
              </ul>
            </div>
          );
        })}
        <div className="resume-section-header">EDUCATION</div>
        <div className="resume-section-divider"></div>
        {config.education.map((edu, idx) => {
          return (
            <div className="education" key={`edu_${idx}`}>
              <div className="education-header flex-row">
                <div className="resume-school">{edu.school}</div>
                <div className="resume-dates">
                  {edu.start_date} - {edu.end_date}
                </div>
              </div>
              <div className="education-description-gpa flex-row">
                <div className="edu-description">{edu.description}</div>
                {edu.GPA ? <div className="gpa">GPA: {edu.GPA}</div> : <></>}
              </div>
            </div>
          );
        })}
        <div className="resume-section-header">TECHNICAL PROJECTS</div>
        <div className="resume-section-divider"></div>
        {config.technical_projects.map((proj, idx) => {
          return (
            <div
              className="technical-project"
              key={`technical_project_${idx}`}
            >
              <div className="project-header flex-row">
                <div className="project-github flex-row">
                  <div className="resume-project">{proj.title}</div>
                  <div className="project-link-divider">|</div>
                  <div className="resume-project-link">{proj.link}</div>
                </div>
                <div className="resume-dates">
                  {proj.year}
                </div>
              </div>
              <ul className="resume-project-points">
                {proj.points.map((point, ptIdx) => {
                  return <li key={`project-point-${ptIdx}`}>{point}</li>;
                })}
              </ul>
            </div>
          );
        })}
        <button id="resume-download">
          <a href={pdf_resume} target="_blank">
            Download PDF
          </a>
        </button>
      </div>
    </div>
  );
};

export default Subpage;
