"use client";
import React, { useState, useEffect } from "react";
import {
  Input,
  message,
  Typography,
  Upload,
  TreeSelect,
  Avatar,
  Form,
} from "antd";
import Image from "next/image";
import Button from "./Button";
const { Text, Title } = Typography;

interface ButtonProps {
  type: any;
  label: string;
  isGhost: any;
  onClick: () => void;
  className?: string;
  htmlType?:string;
}

interface CreateGroupProps {
  heading: string;
  subheading: string;
  primaryButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
}

import {
  UploadOutlined,
  PictureOutlined,
  TeamOutlined,
  CloseCircleFilled,
  EditOutlined,
} from "@ant-design/icons";

const CreateGroup: React.FC<CreateGroupProps> = ({
  heading,
  subheading,
  primaryButtonProps,
  secondaryButtonProps,
}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  // const {
  //   isModalOpen,
  //   showModal,
  //   handleOk,
  //   handleCancel,
  //   selectedEmploy,
  //   Employees,
  //   setGroupName,
  //   selectedEmployee,
  //   removeEmployee,
  //   handleCreateGroup,
  //   handleChange,
  //   fileList,
  //   formRef,
  //   // onFinish,
  // } = props;

  //   Validation message
  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = () => {
    // handleCreateGroup();
    // console.log(values);
  };
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const beforeUpload: any["beforeUpload"] = (file: any) => {
    return false;
  };

  if (!mounted) {
    return null;
  }
  return (
    <>
      <Form
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="flex flex-col w-full h-auto"
      >
        <div className="flex justify-between mb-4 items-center w-full">
          <div>
            {heading && <h2 className="text-l font-bold">{heading}</h2>}
            {subheading && (
              <p className="text-xs text-secondary-60">{subheading}</p>
            )}
          </div>
          <div className="flex h-10 items-center gap-4">
            {primaryButtonProps && <Button {...primaryButtonProps}  />}
            {secondaryButtonProps && (
              <Button
                {...secondaryButtonProps}
                className="bg-gradient-to-r from-primary-80 to-primary-90 text-primary-50"
                htmlType="submit"
              />
            )}
          </div>
        </div>
        {/* <div className="flex flex-row justify-between h-[60px] bg-gray-300 "> */}

        {/* <div className=" w-6/12 m-auto  flex flex-col">
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
              type="default"
              htmlType="submit"
              // onClick={onSumbitCreateGroup}
              className="  bg-gradient-to-r from-primary-80 to-primary-90 text-primary-50 h-12 tracking-wide"
            >
              Add Participants{" "}
            </Button>
          // </div> */}
        {/* </div> */}

        <div className="flex flex-row w-full h-auto">
          <div className=" flex flex-col w-6/12">
            <div className="mt-5">
              <h2 className="text-secondary mb-1">Group Name</h2>
              <Form.Item
                name="Group Name"
                label={false}
                rules={[{ required: true }]}
              >
                <Input
                  size="large"
                  placeholder="Group Name"
                  className="border  border-secondary-40 rounded w-[348px] h-[43px]"
                  // onChange={(e) => setGroupName(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className="mt-0 ">
              <h2 className="text-secondary mb-1">Add Employee</h2>
              <Form.Item
                name="Add Employee"
                label={false}
                // rules={
                //   selectedEmployee?.length <= 1
                //     ? [{ required: true }]
                //     : [{ required: false }]
                // }
                className="w-[348px] justify-center items-center"
              >
                <TreeSelect
                  showSearch
                  showArrow
                  placeholder="Add Employee"
                  size="large"
                  // value={selectedEmployee}
                  // allowClear
                  // treeData={Employees}
                  // onChange={selectedEmploy}
                />
              </Form.Item>
            </div>
            {/* Select Driver */}
            <div className="mt-0 ">
              <h2 className="text-secondary mb-1">Add Driver</h2>
              <Form.Item
                name="Add Driver"
                label={false}
                // rules={
                //   selectedEmployee?.length <= 1
                //     ? [{ required: true }]
                //     : [{ required: false }]
                // }
                className="w-[348px] justify-center items-center"
              >
                <TreeSelect
                  showSearch
                  showArrow
                  placeholder="Add Employee"
                  size="large"
                  // value={selectedEmployee}
                  // allowClear
                  // treeData={Employees}
                  // onChange={selectedEmploy}
                />
              </Form.Item>
            </div>
            <div className="mt-0 pt-0 flex flex-row justify-start items-start text-start">
              <TeamOutlined className="text-primary-80" />
              <Text
                className="text-primary-80 cursor-pointer ml-2"
                // onClick={showModal}
              >
                Add all Employees
              </Text>
            </div>
            <div className="flex flex-row overflow-scroll  no-scrollbar w-[348px] mt-5">
              {/* {selectedEmployee?.map((employee: any) => (
                <div
                  key={employee?.id}
                  className="relative flex flex-col justify-center items-center mr-5 mb-2"
                >
                  <Avatar src={employee?.avatar} size={40} />
                  <CloseCircleFilled
                    onClick={() => removeEmployee(employee?.id)}
                    className="absolute top-6 right-1 -mt-2 -mr-2   cursor-pointer text-xl  text-secondary-70 bg-white rounded-full"
                  />
                  <Text className="text-secondary  truncate">
                    {employee?.title}
                  </Text>
                </div>
              ))} */}
            </div>
          </div>
          <div className="w-6/12">
            <div className="mt-6">
              <h2 className="text-secondary mb-1">Group Profile </h2>
              <Form.Item
                name="Group Profile"
                label={false}
                rules={[{ required: true }]}
                className=" flex flex-col w-[201px] h-[129px] justify-center items-center bg-secondary-60"
              >
                <Upload
                  // action="false"
                  beforeUpload={beforeUpload}
                  // fileList={fileList}
                  maxCount={1}
                  showUploadList={false}
                  // onChange={handleChange}
                  className="block max-w-[201px]"
                >
                  {/* {fileList.length >= 1 ? (
                    <>
                      <Image
                        src={URL.createObjectURL(fileList[0]?.originFileObj)}
                        alt={fileList[0]?.name}
                        width={201}
                        height={134}
                        className="h-[134px]  object-cover m-auto"
                      />
                      <EditOutlined className="text-center h-8 w-8 p-2 text-lg bg-primary-80 text-white absolute bottom-3 right-2 rounded-full" />
                    </>
                  ) : (
                    <>
                      <PictureOutlined className="text-secondary-40 ml-10  p-10  w-[163px] text-5xl" />
                      <UploadOutlined className="text-center h-8 w-8 p-2 absolute bottom-2 right-2 text-lg bg-primary-80 text-white rounded-full" />
                    </>
                  )} */}
                </Upload>
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default CreateGroup;
