"use client";
import React, { useState, useEffect, useRef } from "react";
import { ConfigProvider } from "antd";
import CreateGroup from "@/app/component/CreateGroup";
import CreateGroupHeader from "@/app/component/CreateGroupHeader";
import SideMenuIcon from "@/app/component/SideMenuIcon";
import SideMenuItem from "@/app/component/SideMenuItem";
import ModalBox from "@/app/component/ModalBox";

interface EmployeesProps {
  id: string;
  avatar: string;
  title: string;
  value: string;
}

// Dummy data for employee
const Employees: EmployeesProps[] = [
  {
    id: "1",
    avatar:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    title: "Rahul",
    value: "Rahul",
  },
  {
    id: "2",
    avatar: "https://placekitten.com/250/250",
    title: "Kohli",
    value: "Kohli",
  },
  {
    id: "3",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Vinod",
    value: "Vinod",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Pratik",
    value: "Pratik",
  },
  {
    id: "5",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Gautam",
    value: "Gautam",
  },

  {
    id: "6",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Veer",
    value: "Veer",
  },
  {
    id: "7",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Singh",
    value: "Singh",
  },
  {
    id: "8",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Tiwari",
    value: "Tiwari",
  },
];

const Dashboard = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAll, setIsAll] = useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeesProps[]>(
    []
  );

  const [groupProfile, setGroupProfile] = useState<any[]>([]);
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
    setSelectedEmployee([...Employees]);
    handleOk();
    setIsAll(true);
  };
  //

  const handleChange = ({ fileList }: { fileList: any }) => {
    setGroupProfile(fileList);
  };
  //
  const formRef = useRef<any>(null); //trigger  onSumbitCreateGroup
  const onSumbitCreateGroup = (val: any) => {
    formRef.current.submit();
  };
  // creating a group---
  const handleCreateGroup = () => {
    // Create object with collected data
    const groupData = {
      groupName,
      selectedEmployee,
      groupProfile,
    };
    // Output the object to console
    console.log(groupData);
  };

  const selectedEmploy = (selectedValues: string[]) => {
    if (isAll) {
      setSelectedEmployee([...Employees]);
    } else {
      const selectedEmployeesData = Employees?.filter((employee) =>
        selectedValues?.includes(employee.value)
      );

      setSelectedEmployee((prevSelectedEmployees) => {
        const filteredSelectedEmployees = selectedEmployeesData.filter(
          (employee) =>
            !prevSelectedEmployees.find(
              (prevEmployee) => prevEmployee.id === employee.id
            )
        );
        return [...prevSelectedEmployees, ...filteredSelectedEmployees];
      });
    }
  };
  //   remove an employee
  const removeEmployee = (id: string) => {
    setSelectedEmployee((prevSelectedEmployees) =>
      prevSelectedEmployees.filter((employee) => employee.id !== id)
    );
  };
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "var(--font-sogoe)",
        },
      }}
    >
      <div className="bg-white-100 w-full h-screen flex flex-row  justify-center ">
        <div className="bg-gray-100 text-center w-14 m-1">
          <SideMenuIcon />
        </div>
        <div className=" bg-gray-100 w-72  m-1">
          {" "}
          <SideMenuItem />
        </div>
        <div className="w-full m-1  ">
          <div className="w-[815px] h-[560px] p-8 border-[1px] border-[#D4D4D4] rounded-lg ml-[40px] mt-[52px] ">
            <CreateGroupHeader onSumbitCreateGroup={onSumbitCreateGroup} />
            <CreateGroup
              isModalOpen={isModalOpen}
              showModal={showModal}
              handleOk={handleOk}
              handleCancel={handleCancel}
              selectedEmploy={selectedEmploy}
              Employees={Employees}
              setGroupName={setGroupName}
              selectedEmployee={selectedEmployee}
              removeEmployee={removeEmployee}
              handleCreateGroup={handleCreateGroup}
              handleChange={handleChange}
              fileList={groupProfile}
              formRef={formRef}
              setSelectedEmployee={setSelectedEmployee}
            />
            <ModalBox
              isModalOpen={isModalOpen}
              showModal={showModal}
              handleOk={handleOk}
              handleCancel={handleCancel}
              selectAllEmployee={selectAllEmployee}
            />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Dashboard;
