import { useState } from "react";
import "./App.css";
import { General } from "./components/General";
import { CvPreview } from "./components/CvPreview";
import { Qualification } from "./components/Qualification";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";

function App() {
  const [cv, setCv] = useState({});
  console.log(cv);

  const updateCv = (cvData) => {
    const oldCv = structuredClone(cv);
    setCv(Object.assign(oldCv, cvData));
  };

  return (
    <>
      <div>
        <h1>CV Builder</h1>
        <General onSave={updateCv} />
        <Qualification
          FormComponent={Experience}
          type="experience"
          onSave={updateCv}
        />
        <Qualification
          FormComponent={Education}
          type="education"
          onSave={updateCv}
        />
      </div>
      <CvPreview {...cv}></CvPreview>
    </>
  );
}

export default App;
