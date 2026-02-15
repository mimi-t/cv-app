import PropTypes from "prop-types";

export function General({ onSave }) {
  function showError(e) {
    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity(
        `Please input a valid ${e.target.previousSibling.textContent.toLowerCase().replaceAll("*", "")}`,
      );
    } else {
      e.target.setCustomValidity("");
    }
  }

  function getFormData(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    return Object.fromEntries(formData);
  }
  return (
    <details id="general" open>
      <summary>
        <h2>General</h2>
      </summary>
      <form
        id="general-form"
        onSubmit={(e) => onSave(getFormData(e), "general")}
      >
        <div className="form-field">
          <label htmlFor="general-name">Name*</label>
          <input type="text" name="name" id="general-name" required />
        </div>
        <div className="form-field">
          <label htmlFor="general-email">Email*</label>
          <input type="email" name="email" id="general-email" required />
        </div>
        <div className="form-field">
          <label htmlFor="general-phone">Phone number*</label>
          <input
            type="tel"
            name="phone"
            id="general-phone"
            pattern="(\+\d{1,3}|\(\d{1,2}\))?[\s\d]{7,12}"
            onInput={showError}
            onInvalid={showError}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="general-website">Website</label>
          <input
            type="text"
            name="website"
            id="general-website"
            pattern="[\w\-]+\.[\w\-]+"
            onInput={showError}
            onInvalid={showError}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </details>
  );
}

General.propTypes = {
  onSave: PropTypes.func,
};
