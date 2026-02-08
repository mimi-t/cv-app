import { useState } from "react";
import PropTypes from "prop-types";

export function Experience({
  id,
  title,
  company,
  currentlyWorking = false,
  startMonth,
  startYear,
  endMonth,
  endYear,
  description,
  onSave,
  onDelete,
}) {
  const [isCurrent, setIsCurrent] = useState(currentlyWorking === "true");
  return (
    <form id="experience-form" onSubmit={onSave}>
      <input type="hidden" name="id" value={id} required />
      <div className="form-field">
        <label htmlFor="title">Title*</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={title}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="company">Company*</label>
        <input
          type="text"
          name="company"
          id="company"
          defaultValue={company}
          required
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="currentlyWorking"
          id="current"
          value={true}
          checked={isCurrent}
          onChange={() => setIsCurrent(!isCurrent)}
        />
        <label htmlFor="current">I am currently working in this role</label>
      </div>
      <div className="form-field">
        <fieldset>
          <legend>Start date*</legend>
          <label htmlFor="startMonth">Month</label>
          <select
            name="startMonth"
            id="startMonth"
            defaultValue={startMonth}
            required
          >
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
            required
          />
        </fieldset>
      </div>
      <div className="form-field">
        <fieldset disabled={isCurrent}>
          <legend>End date*</legend>
          <label htmlFor="endMonth">Month</label>
          <select
            name="endMonth"
            id="endMonth"
            defaultValue={endMonth}
            required
          >
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
            required
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

Experience.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  currentlyWorking: PropTypes.string,
  startMonth: PropTypes.string,
  startYear: PropTypes.string,
  endMonth: PropTypes.string,
  endYear: PropTypes.string,
  description: PropTypes.string,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
};
