import "../styles/Qualification.css";
import { Fragment, useState } from "react";
import PropTypes from "prop-types";

export function Qualification({ FormComponent, type, onSave }) {
  const [qualifications, setQualifications] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [openedQualificationId, setOpenedQualificationId] = useState("");

  function toggleAddForm() {
    setIsActive(!isActive);
  }

  function toggleCurrentForm(id) {
    id === openedQualificationId
      ? setOpenedQualificationId("")
      : setOpenedQualificationId(id);
  }

  function saveQualification(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let savedQualification = Object.fromEntries(formData);
    const qualificationIndex = qualifications.findIndex(
      (qualification) => qualification.id === savedQualification.id,
    );
    let newQualifications = [...qualifications];
    if (qualificationIndex === -1) {
      // add new qualification
      savedQualification.id = crypto.randomUUID();
      newQualifications.push(savedQualification);
      setQualifications(newQualifications);
      toggleAddForm();
    } else {
      // update existing qualification
      newQualifications[qualificationIndex] = savedQualification;
      setQualifications(newQualifications);
      setOpenedQualificationId("");
    }
    onSave(newQualifications, type);
  }

  function deleteQualification(id) {
    const qualificationIndex = qualifications.findIndex(
      (qualification) => qualification.id === id,
    );
    let newQualifications = [...qualifications];
    newQualifications.splice(qualificationIndex, 1);
    setQualifications(newQualifications);
    setOpenedQualificationId("");
    onSave(newQualifications, type);
  }

  return (
    <section id={type}>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      {qualifications.length > 0 && (
        <div className={`${type}-container`}>
          {qualifications.map((qualification) => (
            <Fragment key={qualification.id}>
              <div
                key={qualification.id + "list"}
                onClick={() => toggleCurrentForm(qualification.id)}
                className={
                  openedQualificationId === qualification.id && "selected"
                }
              >
                {qualification.school}
                {qualification.title}
              </div>
              {openedQualificationId === qualification.id && (
                <FormComponent
                  {...qualification}
                  key={qualification.id + "form"}
                  onSave={saveQualification}
                  onDelete={deleteQualification}
                />
              )}
            </Fragment>
          ))}
        </div>
      )}
      {isActive && <FormComponent onSave={saveQualification} />}
      <button onClick={toggleAddForm}>
        {isActive ? "Close" : `Add ${type}`}
      </button>
    </section>
  );
}

Qualification.propTypes = {
  FormComponent: PropTypes.elementType,
  type: PropTypes.string,
  onSave: PropTypes.func,
};
