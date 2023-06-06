"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import error from "./../../public/images/Error.png";
import { Button } from "antd";
interface ButtonProps {
  label: string;
  onClick: () => void;
}
interface PageNotFoundProps {
  heading?: string;
  subheading?: string;
  primaryButtonProps?: ButtonProps;
}
const PageNotFound: React.FC<PageNotFoundProps> = ({
  heading,
  subheading,
  primaryButtonProps,
}) => {
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }
  return (
    <div className="max-w-[1440px] w-full h-screen flex flex-col">
      <div className="flex flex-col justify-center m-auto items-center text-center">
        <Image src={error} alt="error" width={270} height={270} />
        {heading && <h1 className="font-normal text-5xl ">{heading}</h1>}
        {subheading && (
          <p className="text-lg mt-4 tracking-tight  font-light max-w-[30vw] w-full text-secondary-80">
            {subheading}
          </p>
        )}
        {primaryButtonProps && (
          <Button
            onClick={primaryButtonProps?.onClick}
            type="default"
            ghost
            className="mt-4 text-white tracking-normal   font-light  text-sm h-10  bg-gradient-to-r from-primary-80 to-primary-90"
          >
            {primaryButtonProps?.label}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PageNotFound;
