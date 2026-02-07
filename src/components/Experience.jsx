import { useState } from 'react'

export function Experience({onSave}) {
    const [isCurrent, setIsCurrent] = useState(false);

    return (
    <section id='experience'>
      <h2>Experience</h2>
      <button>Add job</button>
      <form id="experience-form" onSubmit={onSave}>
        <div className="form-field">
          <label htmlFor='title'>Title*</label>
          <input type='text' name="title" id='title' required/>
        </div>
        <div className="form-field">
          <label htmlFor='company'>Company*</label>
          <input type='text' name="company" id='company' required/>
        </div>
        <div>
          <input type='checkbox' name="currentlyWorking" id='current' checked={isCurrent} onChange={() => setIsCurrent(!isCurrent)}/>
          <label htmlFor='current'>I am currently working in this role</label>
        </div>
        <div className="form-field">
          <fieldset>
            <legend>Start date*</legend>
            <label htmlFor='startMonth'>Month</label>
            <select name="startMonth" id="startMonth">
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <label htmlFor='startYear'>Year</label>
            <input type='number' name="startYear" id='startYear' required/>
          </fieldset>
        </div>
        <div className="form-field">
          <fieldset disabled={isCurrent} >
            <legend>End date*</legend>
            <label htmlFor='endMonth'>Month</label>
            <select name="endMonth" id="endMonth">
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <label htmlFor='endYear'>Year</label>
            <input type='number' name="endYear" id='endYear' required/>
          </fieldset>
        </div>
        <div className="form-field">
          <label htmlFor='description'>Description</label>
          <textarea name="description" id="description"></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </section>
)}