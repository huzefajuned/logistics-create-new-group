"use client";
import React, { useState, useEffect, SetStateAction } from "react";
import {
  UploadOutlined,
  PictureOutlined,
  TeamOutlined,
  CloseCircleFilled,
  EditOutlined,
} from "@ant-design/icons";

import { Input, Typography, Upload, Avatar, Form, Select } from "antd";
import Image from "next/image";
const { Text } = Typography;
import CustomButton from "./CustomButton"; // customButton
interface ButtonProps {
  type: any;
  label: string;
  isGhost: any;
  onClick: () => void;
  className?: string;
  htmlType?: string;
}
interface dataProps {
  id: string;
  avatar: string;
  label: string;
  value: string;
}

interface CreateGroupProps {
  heading: string;
  subheading: string;
  primaryButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  selectedEmployees: any[];
  selectedDrivers: any[];
  setSelectedEmployees: React.Dispatch<SetStateAction<any[]>>;
  setSelectedDrivers: React.Dispatch<SetStateAction<any[]>>;
  showModal: () => void;
}
interface formOptionsProps {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  options?: dataProps[];
  addAll?: string;
}
//dummy-data
const data: dataProps[] = [
  {
    id: "1",
    avatar:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    label: "Rahul-label",
    value: "1",
  },
  {
    id: "2",
    avatar: "https://placekitten.com/250/250",
    label: "Kohli",
    value: "Kohli",
  },
  {
    id: "3",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    label: "Vinod",
    value: "Vinod",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    label: "Pratik",
    value: "Pratik",
  },
  {
    id: "5",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    label: "Gautam",
    value: "Gautam",
  },

  {
    id: "6",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    label: "Veer",
    value: "Veer",
  },
  {
    id: "7",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    label: "Singh",
    value: "Singh",
  },
  {
    id: "8",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    label: "Tiwari",
    value: "Tiwari",
  },
];
//formOptions -- like {input,select}
const formOptions: formOptionsProps[] = [
  {
    type: "input",
    id: "groupName",
    label: "Group Name",
    placeholder: "Group Name",
  },
  {
    type: "select",
    id: "selectEmployee",
    label: "Select Employee",
    placeholder: "Select Employee",
    options: data,
    addAll: "addAllEmployees",
  },
  {
    type: "select",
    id: "selectDriver",
    label: "Select Driver",
    placeholder: "Select Driver",
    options: data,
    addAll: "addAllDrivers",
  },
  {
    type: "upload",
    id: "groupProfile",
    label: "Group Profile",
    placeholder: "Group Profile",
  },
];

const CreateGroup: React.FC<CreateGroupProps> = ({
  heading,
  subheading,
  primaryButtonProps,
  secondaryButtonProps,
  showModal,
  selectedDrivers,
  selectedEmployees,
  setSelectedDrivers,
  setSelectedEmployees,
}) => {
  const [groupProfile, setGroupProfile] = useState<any[]>([]);
  const [fileList, setFileList] = useState<any[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  //  Form Validation message
  const validateMessages = {
    required: "${label} is required!",
  };

  // Final Group Created
  const onFinish = (values: any) => {
    console.log("createdGroup - ", values);
  };

  const onChangeListenerForEmployee = (values: any, remain_values: any) => {
    setSelectedEmployees([...remain_values]);
  };

  const onChangeListenerForDriver = (values: any, remain_values: any) => {
    setSelectedDrivers([...remain_values]);
  };
// custome handler--
  const handlers: any = {
    selectEmployee: onChangeListenerForEmployee,
    selectDriver: onChangeListenerForDriver,
  };

  const handleChange = ({ fileList }: { fileList: any }) => {
    setGroupProfile(fileList);
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
        {/* Form Heading--- */}
        <div className="flex justify-between mb-4 items-center w-full">
          <div>
            {heading && <h2 className="text-l font-bold">{heading}</h2>}
            {subheading && (
              <p className="text-xs tracking-normal text-secondary-70">
                {subheading}
              </p>
            )}
          </div>
          <div className="flex h-10 items-center gap-4">
            {primaryButtonProps && <CustomButton {...primaryButtonProps} />}
            {secondaryButtonProps && (
              <CustomButton
                {...secondaryButtonProps}
                className="bg-gradient-to-r from-primary-80 to-primary-90 text-primary-50"
                htmlType="submit"
              />
            )}
          </div>
        </div>

        <div className=" flex flx-row  w-full ">
          <div>
            <div className="w-[348px]">
              {formOptions.map((option) => {
                switch (option.type) {
                  case "input":
                    return (
                      <Form.Item
                        label={option.label}
                        name={option.label}
                        id={option.id}
                        className=""
                        rules={[{ required: true }]}
                      >
                        <Input
                          placeholder={option.placeholder}
                          className="h-12"
                        />
                      </Form.Item>
                    );
                  case "select":
                    return (
                      <>
                        <Form.Item
                          label={option.label}
                          name={option.id}
                          rules={[{ required: true }]}
                          className="mb-0"
                        >
                          <Select
                            mode="multiple"
                            title={option.id}
                            options={option.options?.map(
                              (option_entry: dataProps) => {
                                return {
                                  value: option_entry.id,
                                  label: option_entry.label,
                                  avatar: option_entry.avatar,
                                };
                              }
                            )}
                            placeholder={option.placeholder}
                            className="h-12  bg-transparent"
                            allowClear
                            size="large"
                            showSearch
                            maxTagCount={3}
                            onChange={handlers[option.id]}
                          ></Select>
                        </Form.Item>
                        <div className="mt-0 pt-0 flex flex-row justify-start items-center text-start mb-4 ">
                          <TeamOutlined className="text-primary-80" />
                          <Text
                            className="text-primary-80 cursor-pointer ml-2"
                            onClick={showModal}
                          >
                            {option.addAll}
                          </Text>
                        </div>
                      </>
                    );
                }
              })}
            </div>

            {/*  selectedEmployee Preview----*/}
            {selectedEmployees?.length > 0 && (
              <>
                <p>selectedEmployees</p>

                <div className="flex flex-row overflow-scroll  no-scrollbar w-[348px] mt-5">
                  {selectedEmployees?.map((employee: any) => {
                    return (
                      <div
                        key={employee?.value}
                        className="relative flex flex-col justify-center items-center mr-5 mb-2"
                      >
                        <Avatar src={employee?.avatar} size={40} />
                        <CloseCircleFilled
                          // onClick={() => removeEmployee(employee?.id)}
                          className="absolute top-6 right-1 -mt-2 -mr-2   cursor-pointer text-xl  text-secondary-70 bg-white rounded-full"
                        />
                        <Text className="text-secondary  truncate">
                          {employee?.label}
                        </Text>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/*  selectedDrivers Preview----*/}
            {selectedDrivers?.length > 0 && (
              <>
                <p>selectedDrivers</p>

                <div className="flex flex-row overflow-scroll  no-scrollbar w-[348px] mt-5">
                  {selectedDrivers?.map((employee: any) => {
                    return (
                      <div
                        key={employee?.value}
                        className="relative flex flex-col justify-center items-center mr-5 mb-2"
                      >
                        <Avatar src={employee?.avatar} size={40} />
                        <CloseCircleFilled
                          // onClick={() => removeEmployee(employee?.id)}
                          className="absolute top-6 right-1 -mt-2 -mr-2   cursor-pointer text-xl  text-secondary-70 bg-white rounded-full"
                        />
                        <Text className="text-secondary  truncate">
                          {employee?.label}
                        </Text>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          {/* Upload Group Profile--- */}
          <div className="ml-4 mt-0 w-full">
            {formOptions.map((option) => {
              switch (option.type) {
                case "upload":
                  return (
                    <Form.Item
                      label={option.label}
                      name={option.id}
                      className=" w-[201px] h-[129px] justify-center items-center  "
                      rules={[{ required: true }]}
                    >
                      <Upload
                        beforeUpload={beforeUpload}
                        fileList={fileList}
                        onChange={handleChange}
                        showUploadList={false}
                        maxCount={1}
                      >
                        {groupProfile.length === 0 ? (
                          <>
                            <PictureOutlined className="text-secondary-40 bg-secondary-50 p-10 w-[201px] h-[129px] text-5xl relative" />
                            <UploadOutlined className="text-center h-8 w-8 p-0 text-lg bg-primary-80 text-white rounded-full absolute bottom-4 right-4 transform translate-x-2 translate-y-2" />
                          </>
                        ) : (
                          <>
                            <Image
                              src={URL.createObjectURL(
                                groupProfile[0]?.originFileObj
                              )}
                              alt="Group Profile"
                              width={201}
                              height={134}
                              className="w-[201px] h-[129px]  object-cover m-auto"
                            />
                            <EditOutlined className="text-center h-8 w-8 p-0 absolute bottom-4 right-4 transform translate-x-2 translate-y-2 text-lg bg-primary-80 text-white rounded-full" />
                          </>
                        )}
                      </Upload>
                    </Form.Item>
                  );
              }
            })}
          </div>
        </div>
      </Form>
    </>
  );
};

export default CreateGroup;
