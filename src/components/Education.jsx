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
          <select name="startMonth" id="startMonth" defaultValue={startMonth}>
            <option value="">Month</option>
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
          />
        </fieldset>
      </div>
      <div className="form-field">
        <fieldset>
          <legend>End date (or expected)</legend>
          <label htmlFor="endMonth">Month</label>
          <select name="endMonth" id="endMonth" defaultValue={endMonth}>
            <option value="">Month</option>
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
      {onDelete && (
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      )}
      <button type="submit">Save</button>
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
