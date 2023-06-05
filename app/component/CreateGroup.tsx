"use client";
import React, { useState, useEffect } from "react";
import {
  Input,
  message,
  Typography,
  Upload,
  TreeSelect,
  Avatar,
  Button,
  Form,
} from "antd";
import Image from "next/image";
const { Title, Text } = Typography;
import {
  UploadOutlined,
  PictureOutlined,
  TeamOutlined,
  CloseCircleFilled,
  EditOutlined,
} from "@ant-design/icons";

const CreateGroup: React.FC<any> = (props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
    selectedEmploy,
    Employees,
    setGroupName,
    selectedEmployee,
    removeEmployee,
    handleCreateGroup,
    handleChange,
    fileList,
    formRef,
    // onFinish,
  } = props;

  //   Validation message
  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = () => {
    handleCreateGroup();
    // console.log(values);
  };
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <Form
        ref={formRef}
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="flex flex-row w-full h-auto"
      >
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
                onChange={(e) => setGroupName(e.target.value)}
              />
            </Form.Item>
          </div>
          <div className="mt-0 ">
            <h2 className="text-secondary mb-1">Add Employee</h2>
            <Form.Item
              name="Add Employee"
              label={false}
              rules={[{ required: true }]}
              className="w-[348px] justify-center items-center"
            >
              <TreeSelect
                showSearch
                showArrow
                placeholder="Add Employee"
                size="large"
                allowClear
                // onChange={selectedEmploy}
                treeData={Employees}
                // multiple={true}
                onChange={(val) => selectedEmploy(val)}
              />
            </Form.Item>
          </div>
          <div className="mt-2 pt-1 flex flex-row justify-start items-start text-start">
            <TeamOutlined className="text-primary-80" />
            <Text
              className="text-primary-80 cursor-pointer ml-2"
              onClick={showModal}
            >
              Add all Employees
            </Text>
          </div>
          <div className="flex flex-row overflow-scroll  no-scrollbar w-[348px] mt-5">
            {selectedEmployee?.map((employee: any) => (
              <div className="relative flex flex-col justify-center items-center mr-5 mb-2">
                <Avatar src={employee?.avatar} size={40} />
                <CloseCircleFilled
                  onClick={() => removeEmployee(employee?.id)}
                  className="absolute top-6 right-1 -mt-2 -mr-2   cursor-pointer text-xl  text-secondary-70 bg-white rounded-full"
                />
                <Text className="text-secondary  truncate">
                  {employee?.title}
                </Text>
              </div>
            ))}
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
                fileList={fileList}
                maxCount={1}
                showUploadList={false}
                onChange={handleChange}
                className="block max-w-[201px]"
              >
                {fileList.length >= 1 ? (
                  <>
                    <Image
                      src={URL.createObjectURL(fileList[0]?.originFileObj)}
                      alt={fileList[0]?.name}
                      width={201}
                      height={129}
                      className="h-[130px]  object-cover"
                    />
                    <EditOutlined className="text-center h-8 w-8 p-2 text-lg bg-primary-80 text-white absolute bottom-2 right-3 rounded-full" />
                  </>
                ) : (
                  <>
                    <PictureOutlined className="text-secondary-40 ml-10  p-10  w-[163px] text-5xl" />
                    <UploadOutlined className="text-center h-8 w-8 p-2 absolute bottom-2 right-2 text-lg bg-primary-80 text-white rounded-full" />
                  </>
                )}
              </Upload>
            </Form.Item>
          </div>
        </div>
      </Form>
    </>
  );
};

export default CreateGroup;
