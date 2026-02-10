import "../styles/CvPreview.css";
import PropTypes from "prop-types";

export function CvPreview({ general, experience, education }) {
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

  function sortByEndDate(a, b) {
    let aDate;
    if (a.currentlyWorking) {
      aDate = new Date();
    } else if (!a.endYear) {
      // if end date is not provided, assume it is same as start date
      let month = a.startMonth ? parseInt(a.startMonth) : 12;
      aDate = new Date(a.startYear, month - 1);
    } else {
      let month = a.endMonth ? parseInt(a.endMonth) : 12;
      aDate = new Date(a.endYear, month - 1);
    }

    let bDate;
    if (b.currentlyWorking) {
      bDate = new Date();
    } else if (!b.endYear) {
      // if end date is not provided, assume it is same as start date
      let month = b.startMonth ? parseInt(b.startMonth) : 12;
      bDate = new Date(b.startYear, month - 1);
    } else {
      let month = b.endMonth ? parseInt(b.endMonth) : 12;
      bDate = new Date(b.endYear, month - 1);
    }
    return bDate - aDate;
  }

  const sortedExperience = experience
    ? [...experience].sort(sortByEndDate)
    : experience;
  const sortedEducation = education
    ? [...education].sort(sortByEndDate)
    : education;

  if (general || experience || education) {
    return (
      <div id="cv-preview">
        {general && (
          <div id="header-container">
            <h1>{general.name}</h1>
            <p>
              {general.email} • {general.phone}{" "}
              {general.website && `• ${general.website}`}
            </p>
          </div>
        )}{" "}
        {experience && (
          <div id="experience-container">
            <h2>Experience</h2>
            {experience &&
              sortedExperience.map((role) => {
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
        )}
        {education && (
          <div id="education-container">
            <h2>Education</h2>
            {education &&
              sortedEducation.map((study) => {
                return (
                  <div className="education" key={study.id}>
                    <div className="title-duration">
                      <strong>{study.school}</strong>
                      <span>
                        {`${study.startMonth && MONTH_MAP[study.startMonth] + " "}${study.startYear}`}
                        {study.endYear && " - "}
                        {`${study.endMonth && MONTH_MAP[study.endMonth] + " "}${study.endYear && study.endYear}`}
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
        )}{" "}
      </div>
    );
  } else {
    return (
      <div id="cv-preview">
        <p id="empty-message">
          Please input your resume details, a CV will be generated here upon
          completing a section
        </p>
      </div>
    );
  }
}

CvPreview.propTypes = {
  general: PropTypes.object,
  experience: PropTypes.arrayOf(PropTypes.object),
  education: PropTypes.arrayOf(PropTypes.object),
};
