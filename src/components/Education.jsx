import PropTypes from "prop-types";

export function Education({
  id,
  school,
  degree,
  field,
  startMonth,
  startYear,
  endMonth,
  endYear,
  description,
  onSave,
  onDelete,
}) {
  function showDateError(e) {
    const form = document.forms["education-form"];
    const formData = new FormData(document.forms["education-form"]);
    const dates = {
      start: {
        year: formData.get("startYear")
          ? parseInt(formData.get("startYear"))
          : "",
        month: formData.get("startMonth")
          ? parseInt(formData.get("startMonth"))
          : "",
      },
      end: {
        year: formData.get("endYear") ? parseInt(formData.get("endYear")) : "",
        month: formData.get("endMonth")
          ? parseInt(formData.get("endMonth"))
          : "",
      },
    };

    // Remove any previous errors
    form["startMonth"].setCustomValidity("");
    form["startYear"].setCustomValidity("");
    form["endMonth"].setCustomValidity("");
    form["endYear"].setCustomValidity("");

    // If user has selected a month, prompt them to enter a year
    if (
      ["year", "month"].some((word) =>
        e.target.name.toLowerCase().includes(word),
      )
    ) {
      const dateBoundary = e.target.name
        .replace("Year", "")
        .replace("Month", "");
      if (dates[dateBoundary].month && !dates[dateBoundary].year) {
        form[`${dateBoundary}Year`].setCustomValidity("Please enter a year");
        return;
      }
    }

    // If user enters an end date, they must enter a start date
    if (dates.end.year && !dates.start.year) {
      e.target.setCustomValidity("Please enter a start date");
    }

    // Date formats for start and end date should match
    if (
      dates.end.year &&
      ((dates.start.month && !dates.end.month) ||
        (!dates.start.month && dates.end.month))
    ) {
      e.target.setCustomValidity(
        "Please match date formats for start and end dates",
      );
    }

    // Ensure end date is later than start date
    if (dates.start.year && dates.end.year) {
      const message = e.target.name.includes("start")
        ? "Start date must be earlier than end date"
        : "End date must be later than start date";

      if (
        dates.start.year > dates.end.year ||
        (dates.start.year === dates.end.year &&
          dates.start.month &&
          dates.end.month &&
          dates.start.month > dates.end.month)
      ) {
        e.target.setCustomValidity(message);
      }
    }
  }

  return (
    <form id="education-form" onSubmit={onSave}>
      <input type="hidden" name="id" value={id} required />
      <div className="form-field">
        <label htmlFor="school">School*</label>
        <input
          type="text"
          name="school"
          id="school"
          defaultValue={school}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="degree">Degree</label>
        <input type="text" name="degree" id="degree" defaultValue={degree} />
      </div>
      <div className="form-field">
        <label htmlFor="field">Field of study</label>
        <input type="text" name="field" id="field" defaultValue={field} />
      </div>
      <div className="form-field">
        <fieldset>
          <legend>Start date</legend>
          <label htmlFor="startMonth">Month</label>
          <select
            name="startMonth"
            id="startMonth"
            defaultValue={startMonth}
            onInvalid={showDateError}
            onChange={showDateError}
          >
            <option value=""></option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <label htmlFor="startYear">Year</label>
          <input
            type="number"
            name="startYear"
            id="startYear"
            defaultValue={startYear}
            onInvalid={showDateError}
            onInput={showDateError}
          />
        </fieldset>
      </div>
      <div className="form-field">
        <fieldset>
          <legend>End date (or expected)</legend>
          <label htmlFor="endMonth">Month</label>
          <select
            name="endMonth"
            id="endMonth"
            defaultValue={endMonth}
            onInvalid={showDateError}
            onChange={showDateError}
          >
            <option value=""></option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <label htmlFor="endYear">Year</label>
          <input
            type="number"
            name="endYear"
            id="endYear"
            defaultValue={endYear}
            onInvalid={showDateError}
            onInput={showDateError}
          />
        </fieldset>
      </div>
      <div className="form-field">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          defaultValue={description}
        ></textarea>
      </div>
      <div className="button-container">
        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(id)}
            className="delete-btn"
          >
            Delete
          </button>
        )}
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

Education.propTypes = {
  id: PropTypes.string,
  school: PropTypes.string,
  degree: PropTypes.string,
  field: PropTypes.string,
  startMonth: PropTypes.string,
  startYear: PropTypes.string,
  endMonth: PropTypes.string,
  endYear: PropTypes.string,
  description: PropTypes.string,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
};
