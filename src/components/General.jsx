export function General({onSave}) {

  return (
    <section id='general'>
      <h2>General</h2>
      <form id="general-form" onSubmit={onSave}>
        <div className="form-field">
          <label htmlFor='general-name'>Name*</label>
          <input type='text' name="name" id='general-name' required/>
        </div>
        <div className="form-field">
          <label htmlFor='general-email'>Email*</label>
          <input type='email' name="email" id='general-email' required/>
        </div>
        <div className="form-field">
          <label htmlFor='general-phone'>Phone number*</label>
          <input type='tel' name="phone" id='general-phone' required/>
        </div>
        <div className="form-field">
          <label htmlFor='general-website'>Website</label>
          <input type='text' name="website" id="general-website"/>
        </div>
        <button type="submit">Save</button>
      </form>
    </section>
)}