import React, { useState, useEffect } from "react";
import {
  Input,
  message,
  Typography,
  Upload,
  TreeSelect,
  Avatar,
  Button,
} from "antd";

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
  } = props;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>             
      <div className="flex flex-row w-full h-full">
        <div className="w-6/12">
          <div className="mt-5">
            <h2 className="text-secondary mb-1">Group Name</h2>
            <Input
              size="large"
              placeholder="Group Name"
              className="border  border-[#ABABAB] rounded w-[348px] h-[43px]"
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h2 className="text-secondary mb-1">Add Employee</h2>
            <TreeSelect
              showSearch
              showArrow
              className="w-[348px] justify-center items-center"
              placeholder="Add Employee"
              size="large"
              allowClear
              onChange={selectedEmploy}
              treeData={Employees}
            />
          </div>
          <div className="mt-2 pt-1 flex flex-row justify-start items-start text-start">
            <TeamOutlined className="text-primary-80" />
            <Text
              className="text-primary-80 cursor-pointer ml-2"
              //   onClick={addAllEmployees}
              onClick={showModal}
            >
              Add all Employees
            </Text>
          </div>
          <div className="flex flex-row overflow-scroll  no-scrollbar w-[348px] mt-5">
            {selectedEmployee.map((employee: any) => (
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
          <div className="mt-5">
            <h2 className="text-secondary mb-1">Group Profile </h2>

            <div className="bg-[#F6F6F6] w-[201px] h-[129px] block absolute">
              <Upload
                maxCount={1}
                showUploadList={false}
                onChange={handleChange}
                className=" flex flex-col justify-center items-center  w-full h-full overflow-hidden"
              >
                {fileList.length >= 1 ? (
                  <>
                    <img
                      src={URL.createObjectURL(fileList[0].originFileObj)}
                      alt={fileList[0].name}
                      className="w-[201px] h-[100%]  object-cover"
                    />

                    <EditOutlined className="text-center h-8 w-8 p-2 text-lg bg-primary-80 text-white absolute bottom-2 right-3 rounded-full" />
                  </>
                ) : (
                  <>
                    <PictureOutlined className="text-gray-400 text-5xl relative top-0 left-5" />
                    <UploadOutlined className="text-center h-8 w-8 p-2 text-lg bg-primary-80 text-white relative top-8 left-12 rounded-full" />
                  </>
                )}
              </Upload>
            </div>
          </div>
        </div>
      </div>
      {/* <Button onClick={handleCreateGroup}>Create Group</Button> */}
    </>
  );
};

export default CreateGroup;
