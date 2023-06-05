"use client";
import React, { useState, useEffect } from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;

const CreateGroupHeader = (props: { onSumbitCreateGroup: any }) => {
  const { onSumbitCreateGroup } = props;
  const [mounted, setMounted] = useState<boolean>(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-row justify-between h-[60px] ">
      <div className=" w-6/12 m-auto  flex flex-col">
        <Title
          level={4}
          className="tracking-wider font-semibold  text-secondary"
        >
          Create New Group
        </Title>

        <p className="text-secondary-40  text-xs tracking-tight  text-start ">
          To create a new group, please fill the fields given below.
        </p>
      </div>
      <div className="w-6/12 h-full    flex flex-row  items-center justify-end ">
        <Button
          type="primary"
          ghost
          className="mr-4 bg-primary-80 text-white h-12 font-normal tracking-wide"
        >
          Cancel
        </Button>
        <Button
          onClick={onSumbitCreateGroup}
          type="default"
          className="  bg-gradient-to-r from-primary-80 to-primary-90 text-primary-50 h-12 tracking-wide"
        >
          Add Participants{" "}
        </Button>
      </div>
    </div>
  );
};

export default CreateGroupHeader;
