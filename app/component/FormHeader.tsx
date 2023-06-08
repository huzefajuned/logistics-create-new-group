import React from "react";
import { FormHeaderProps } from "../interface/type";
const FormHeader: React.FC<FormHeaderProps> = ({ heading, subheading }) => {
  return (
    <div>
      {heading && <h2 className="text-l font-bold">{heading}</h2>}
      {subheading && (
        <p className="text-xs tracking-normal text-secondary-70">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default FormHeader;
