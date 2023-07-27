import "../elements/TextField.css";
import React from "react";
import { Btn } from "../elements/Btn.js";

const TextField = () => {
  return (
    <div>
      <h1>Search Field</h1>
      <form className="text-field">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
        <Btn>Button</Btn>
      </form>
    </div>
  );
};

export default TextField;
