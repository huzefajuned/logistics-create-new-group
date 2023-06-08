"use client";
import React, { useState, useEffect } from "react";
import {
  UploadOutlined,
  PictureOutlined,
  TeamOutlined,
  CloseCircleFilled,
  EditOutlined,
} from "@ant-design/icons";

import {
  Input,
  Typography,
  Upload,
  Avatar,
  Form,
  Select,
  UploadFile,
} from "antd";
import Image from "next/image";
const { Text } = Typography;
import CustomButton from "./CustomButton"; // customButton
import CustomPreview from "./CustomPreview";
import FormHeader from "./FormHeader";
import {
  ButtonProps,
  CreateGroupProps,
  formOptionsProps,
  dataProps,
} from "../interface/type";

//dummy-data
const data: dataProps[] = [
  {
    id: "1",
    avatar:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    label: "Rahul",
    value: "Rahul",
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

  const handleAddAll = ({ allSelectedValues, uniqueId }: any) => {
    showModal();
    // for  later user
    // if (uniqueId === "selectEmployee") {
    //   setSelectedEmployees([...allSelectedValues]);
    // } else if (uniqueId === "selectDriver") {
    //   setSelectedDrivers([...allSelectedValues]);
    // }
  };
  //  Form Validation message
  const validateMessages = {
    required: "${label} is required!",
  };

  // Final Group Created
  const onFinish = (values: dataProps[]) => {
    console.log("createdGroup - ", values);
  };

  // adding all selctedEmployees for preview
  const onChangeListenerForEmployee = (
    values: string,
    remain_values: dataProps[]
  ) => {
    setSelectedEmployees([...remain_values]);
  };

  // adding all selectedDrivers for preview
  const onChangeListenerForDriver = (
    values: string,
    remain_values: dataProps[]
  ) => {
    setSelectedDrivers([...remain_values]);
  };
  // custome handler--
  const handlers: any = {
    selectEmployee: onChangeListenerForEmployee,
    selectDriver: onChangeListenerForDriver,
  };

  const handleChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setGroupProfile(fileList);
  };
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const beforeUpload = () => {
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
          <FormHeader heading={heading} subheading={subheading} />
          <div className="flex h-10 items-center gap-4">
            {primaryButtonProps && <CustomButton {...primaryButtonProps} />}
            {secondaryButtonProps && (
              <CustomButton
                {...secondaryButtonProps}
                className="bg-gradient-to-r from-primary-80 to-primary-90 text-primary-50"
              />
            )}
          </div>
        </div>

        <div className=" flex flx-row justify-evenly  w-full ">
          <div>
            <div className="w-[348px] ">
              {formOptions.map((option) => {
                switch (option.type) {
                  case "input":
                    return (
                      <Form.Item
                        label={option.label}
                        name={option.label}
                        key={option.id}
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
                          key={option.id}
                          rules={[{ required: true }]}
                          className="mb-0"
                        >
                          <Select
                            mode="multiple"
                            title={option.id}
                            value={selectedDrivers || selectedEmployees}
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
                            maxTagCount={2}
                            onChange={handlers[option.id]}
                          ></Select>
                        </Form.Item>
                        <div className="mt-0 pt-0 flex flex-row justify-start items-center text-start mb-4 ">
                          <TeamOutlined className="text-primary-80" />
                          <Text
                            className="text-primary-80 cursor-pointer ml-2"
                            onClick={() =>
                              handleAddAll({
                                allSelectedValues: option.options,
                                uniqueId: option.id,
                              })
                            }
                          >
                            {option.addAll}
                          </Text>
                        </div>
                      </>
                    );
                }
              })}
            </div>

            {/* selectedEmployee Preview---- */}
            {selectedEmployees?.length > 0 && (
              <>
                <p className="text-secondary-70">Selected Employees</p>
                <CustomPreview data={selectedEmployees} />
              </>
            )}

            {/*  selectedDrivers Preview----*/}
            {selectedDrivers?.length > 0 && (
              <>
                <p className="text-secondary-70">Selected Drivers</p>
                <CustomPreview data={selectedDrivers} />
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
