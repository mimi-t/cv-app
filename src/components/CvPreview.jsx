import "../styles/CvPreview.css";
export function CvPreview({
  name,
  email,
  phone,
  website,
  title,
  currentlyWorking,
  startMonth,
  startYear,
  endMonth,
  endYear,
  company,
  description,
}) {
  return (
    <div id="cv-preview">
      <div id="header-container">
        <h1>{name}</h1>
        <p>
          {email} • {phone} {website !== "" ? `• ${website}` : ""}
        </p>
      </div>
      <div id="experience-container">
        <h2>Experience</h2>
        <div className="experience">
          <div className="title-duration">
            <strong>{title}</strong>
            <span>
              {startMonth} {startYear} -{" "}
              {currentlyWorking ? "Present" : `${endMonth} ${endYear}`}
            </span>
          </div>
          <p>{company}</p>
          <p>{description}</p>
        </div>
      </div>
      <div id="education-container">
        <h2>Education</h2>
        <div className="experience">
          <div className="title-duration">
            <strong>School</strong>
            <p>2017 - 2018</p>
          </div>
          <p>Qualification (e.g. Bachelors of IT)</p>
        </div>
      </div>
    </div>
  );
}
