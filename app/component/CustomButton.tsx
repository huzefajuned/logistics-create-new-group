import React from "react";
import { Button } from "antd";

interface ButtonProps {
  type: any;
  label: string;
  isGhost: boolean;
  onClick: () => void;
  className?: string;
  htmlType?: any;
}
const CustomButton: React.FC<ButtonProps> = ({
  type,
  label,
  isGhost,
  onClick,
  className,
  htmlType,
}) => {
  return (
    <>
      <Button
        type={type}
        ghost={isGhost}
        onClick={onClick}
        className={`h-12 tracking-wide ${className}`}
        htmlType={htmlType}
      >
        {label}
      </Button>
    </>
  );
};

export default CustomButton;
