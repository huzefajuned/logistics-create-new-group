import React from "react";
import { Button } from "antd";
import { ButtonProps } from "../interface/type";
const CustomButton: React.FC<ButtonProps> = ({
  type,
  label,
  isGhost,
  onClick,
  className,
  buttonType,
}) => {
  return (
    <>
      <Button
        type={type}
        ghost={isGhost}
        onClick={onClick}
        className={`h-12 tracking-wide ${className}`}
        htmlType={buttonType}
      >
        {label}
      </Button>
    </>
  );
};

export default CustomButton;
