import { useState } from 'react'
import './App.css'
import { General } from './components/General'
import { CvPreview } from './components/CvPreview';

function App() {
  const [cv, setCv] = useState({});
  console.log('APP >>> ' + cv);

  const updateCv = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log(formData);
    const oldCv = structuredClone(cv);
    setCv(Object.assign(oldCv, formData));
  }
  return (
    <>
      <div>
        <h1>CV Builder</h1>
        <General onSave={updateCv}/>
      </div>
      <CvPreview {...cv}></CvPreview>
    </>
  )
}

export default App
