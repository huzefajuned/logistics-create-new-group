import PageNotFound from "@/app/component/PageNotFound";
import React from "react";

// button onClick function--
const handleButtonClick = () => {
  alert("button click");
};
const buttonProps = {
  label: "Back to home",
  onClick: handleButtonClick,
};

const page = () => {
  return (
    <>
      {/* <PageNotFound
        heading="Oops! Page not found"
        subheading="Thank you for your patience. Unfortunately, the page you were searching for does not exist."
        primaryButtonProps={buttonProps}
      /> */}
    </>
  );
};

export default page;
