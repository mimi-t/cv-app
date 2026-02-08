import { useState } from "react";
import "./App.css";
import { General } from "./components/General";
import { CvPreview } from "./components/CvPreview";
import { Experience } from "./components/Experience";

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
        <Experience onSave={updateCv} />
      </div>
      <CvPreview {...cv}></CvPreview>
    </>
  );
}

export default App;
