"use client";
import React, { useState, useEffect, useRef } from "react";
import CreateGroup from "@/app/component/CreateGroup";
import CustomModal from "@/app/component/CustomModal";

const handleClick = () => {
  alert("Please Check Console");
};
const primaryButtonProps = {
  type: "primary",
  isGhost: true,
  label: "Cancel",
  onClick: handleClick,
  className: "className",
};
const secondaryButtonProps = {
  type: "default",
  isGhost: false,
  label: "Add Participants",
  onClick: handleClick,
  className: "className",
  htmlType: "submit",
};


interface selectedEmployeesAndDriversProps{
  avatar:string,
  value:string,
  label:string
}

// for {selectedEmployees,selectedDrivers }
interface dataProps {
  id: string;
  avatar: string;
  label: string;
  value: string;
}

const Dashboard = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAll, setIsAll] = useState<boolean>(false);

  const [selectedEmployees, setSelectedEmployees] = useState<selectedEmployeesAndDriversProps[]>([]);
  const [selectedDrivers, setSelectedDrivers] = useState<selectedEmployeesAndDriversProps[]>([]);

  const showModal = () => {
    setIsModalOpen(true); // Set isModalOpen to true when the modal needs to be shown
  };

  const handleOk = () => {
    setIsModalOpen(false); // Set isModalOpen to false when the user clicks the OK button
  };

  const handleCancel = () => {
    setIsModalOpen(false); // Set isModalOpen to false when the user clicks the Cancel button
  };

  // Add All Employees in a Single Click
  const selectAllEmployee = () => {
    // setSelectedEmployee([...Employees]);
    handleOk();
    setIsAll(true);
  };
  //

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white-100 w-full h-screen flex flex-row  justify-center ">
      <div className="bg-gray-100 text-center items-center justify-center w-14 m-1">
        <p>Icon</p>
      </div>
      <div className="bg-gray-100 items-center justify-center text-center w-72  m-1">
        <p> MenuItem</p>
      </div>
      <div className="w-full m-1  ">
        <div className="w-[815px] max-h-[700px] min-h-[670] h-auto p-8 border-[1px] border-[#D4D4D4] rounded-lg ml-[40px] mt-[52px] ">
          <CreateGroup
            heading="Create New Group"
            subheading="To create a new group, please fill the fields given below."
            primaryButtonProps={primaryButtonProps}
            secondaryButtonProps={secondaryButtonProps}
            showModal={showModal}
            selectedEmployees={selectedEmployees}
            setSelectedEmployees={setSelectedEmployees}
            selectedDrivers={selectedDrivers}
            setSelectedDrivers={setSelectedDrivers}
          />
          <CustomModal
            isModalOpen={isModalOpen}
            showModal={showModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
            selectAllEmployee={selectAllEmployee}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
