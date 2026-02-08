import "../styles/CvPreview.css";
import PropTypes from "prop-types";

export function CvPreview({
  name,
  email,
  phone,
  website,
  experience,
  education,
}) {
  const MONTH_MAP = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };
  return (
    <div id="cv-preview">
      <div id="header-container">
        <h1>{name}</h1>
        <p>
          {email} • {phone} {website && `• ${website}`}
        </p>
      </div>
      <div id="experience-container">
        <h2>Experience</h2>
        {experience &&
          experience.map((role) => {
            return (
              <div className="experience" key={role.id}>
                <div className="title-duration">
                  <strong>{role.title}</strong>
                  <span>
                    {MONTH_MAP[role.startMonth]} {role.startYear} -{" "}
                    {role.currentlyWorking
                      ? "Present"
                      : `${MONTH_MAP[role.endMonth]} ${role.endYear}`}
                  </span>
                </div>
                <p>{role.company}</p>
                <p>{role.description}</p>
              </div>
            );
          })}
      </div>
      <div id="education-container">
        <h2>Education</h2>
        {education &&
          education.map((study) => {
            return (
              <div className="education" key={study.id}>
                <div className="title-duration">
                  <strong>{study.school}</strong>
                  <span>
                    {MONTH_MAP[study.startMonth]} {study.startYear}
                    {study.endYear &&
                      ` - ${MONTH_MAP[study.endMonth]} ${study.endYear}`}
                  </span>
                </div>
                <p>
                  {study.degree} {study.field}
                </p>
                <p>{study.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

CvPreview.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  experience: PropTypes.arrayOf(PropTypes.object),
  education: PropTypes.arrayOf(PropTypes.object),
};
