import React from "react";
import "./FormGroup.css";

function FormGroup() {
  return (
    <div className="form-group">
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"></input>
    </div>
  );
}

export default FormGroup;
