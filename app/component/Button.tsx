import React from "react";
import { Button as Btn } from "antd";

interface ButtonProps {
  type: any;
  label: string;
  isGhost: boolean;
  onClick: () => void;
  className?: string;
  htmlType?: any;
}
const Button: React.FC<ButtonProps> = ({
  type,
  label,
  isGhost,
  onClick,
  className,
  htmlType,
}) => {
  return (
    <>
      <Btn
        type={type}
        ghost={isGhost}
        onClick={onClick}
        className={`h-12 tracking-wide ${className}`}
        htmlType={htmlType}
      >
        {label}
      </Btn>
    </>
  );
};

export default Button;
