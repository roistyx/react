import React from "react";
import "../elements/TextField-vertical.css";
import "../elements/TextField-horizontal.css";

const TextField = ({ direction }) => {
  return (
    <>
      {direction === "vertical" ? (
        <div className="vertical-form">
          <div className="form-group">
            <div className="input-label">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
          </div>

          <div className="form-group">
            <div className="input-label">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
          </div>
        </div>
      ) : direction === "horizontal" ? (
        <div className="text-field">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="username">Email:</label>
          <input type="text" id="username" name="username" />
        </div>
      ) : (
        <div>Default</div>
      )}
    </>
  );
};

export default TextField;
