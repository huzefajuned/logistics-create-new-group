"use client";
import React, { useState, useEffect } from "react";
import { Typography, Button } from "antd";
const { Title, Text } = Typography;

const CreateGroupHeader = () => {
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
      <div className=" w-8/12 m-auto  flex flex-col  ">
        <div className=" flex flex-row ">
          <Title
            level={4}
            className="tracking-wider font-semibold  text-[#000C1C]"
            // style={{ fontWeight: "280" }}
          >
            Create New Group
          </Title>
        </div>

        <div className="text">
          <span className="text-[#6B7280]  tracking-none ">
            To create a new group, please fill the fields given below.
          </span>
        </div>
      </div>
      <div className="w-4/12 h-full m-auto  flex flex-row  items-center justify-evenly ">
        <Button
          type="primary"
          ghost
          className="mr-2 bg-blue-600 text-white h-12 font-normal tracking-wide"
        >
          Cancel
        </Button>
        <Button
          type="default"
          className="mr-2  bg-gradient-to-r from-[#3374EA] to-[#8332F5] text-white h-12 tracking-wide"
        >
          Add Participants{" "}
        </Button>
      </div>
    </div>
  );
};

export default CreateGroupHeader;
