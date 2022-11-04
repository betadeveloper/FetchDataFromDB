import React from "react";
import './Form.css';


export default function Form() {
    return (
      <div className="body">
      <div className="row">
    <div className="col-md-12">
      <form
        action="https://sheetdb.io/api/v1/t0tdd9q5rqp2u"
        method="post"
        id="sheetdb-form"
        style={{"color":"white"}}
      >
        <h1> New Data Input Form </h1>
        <fieldset>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="name"
            name="data[Name]"
            placeholder="Name"
            required=""
          />
          <label htmlFor="Surname">Surname:</label>
          <input
            type="text"
            id="Surname"
            name="data[Surname]"
            placeholder="Surname"
            required=""
          />
          <label htmlFor="Gender">Gender:</label>
          <input
            type="text"
            id="Gender"
            name="data[Gender]"
            placeholder="Gender"
            required=""
          />
          <label htmlFor="Dateofbirth">Date of birth:</label>
          <input
            type="text"
            id="Dateofbirth"
            name="data[Dateofbirth]"
            placeholder="Date of birth"
            required=""
          />
          <label htmlFor="Position">Position:</label>
          <select id="Position" name="data[Position]">
            <optgroup label="Web">
              <option value="Front-End Developer">Front-End Developer</option>
              <option value="fullstack_developer">Full-Stack Developer</option>
              <option value="php_developer">PHP Developer</option>
              <option value=".net_developer">.NET Developer</option>
              <option value="python_developer">Python Developer</option>
              <option value="qa_specialist">QA Specialist</option>
              <option value="web_designer">Web Designer</option>
              <option value="wordpress_developer">Wordpress Developer</option>
              <option value="ui_designer">UI Designer</option>
              <option value="ux_designer">UX Designer</option>
            </optgroup>
            <optgroup label="Mobile">
              <option value="android_developer">Android Developer</option>
              <option value="ios_developer">IOS Developer</option>
              <option value="mobile_designer">Mobile Designer</option>
            </optgroup>
            <optgroup label="Business">
              <option value="business_owner">CEO</option>
              <option value="freelancer">CFO</option>
              <option value="freelancer">CTO</option>
              <option value="freelancer">CIO</option>
              <option value="freelancer">CMO</option>
              <option value="freelancer">COO</option>
              <option value="freelancer">CLO</option>
              <option value="freelancer">CMD</option>
            </optgroup>
          </select>
          <label htmlFor="Annualincome">Annual income: </label>
          <input
            type="text"
            id="Annualincome"
            name="data[Annualincome]"
            placeholder="100,000"
            required=""
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <output id="output" />
    </div>
  </div>
    </div>
    );
  }
