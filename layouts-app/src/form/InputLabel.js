import React, { useState } from "react";
import "./InputLabel.css";
import { Box } from "../layouts/Box.js";

function InputLabel({
  children,
  margin,
  gap,
  color,
  focused,
  required,
  size,
  variant,
}) {
  console.log(required, "required");
  const [isRequired, setIsRequired] = useState(true);
  const style = {
    ...(margin ? { "--margin": margin } : {}),
    ...(gap ? { "--gap": gap } : {}),
    ...(color ? { "--color": color } : {}),
    ...(focused ? { "--focused": focused } : {}),
    ...(required ? { "--required": required } : {}),
    ...(size ? { "--size": size } : {}),
    ...(variant ? { "--variant": variant } : {}),
  };

  return (
    <label htmlFor="name">
      Name{required && <span className="required" />}
    </label>
  );
}

export default InputLabel;
