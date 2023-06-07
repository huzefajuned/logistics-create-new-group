import React from "react";
import { Avatar, Typography } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const { Text } = Typography;
// EmployeeOrDriver  interface---
interface EmployeeOrDriver {
  avatar: string;
  value: string;
  label: string;
}
interface CustomPreviewProps {
  data: EmployeeOrDriver[];
}
// CustomPreview---
const CustomPreview: React.FC<CustomPreviewProps> = ({ data }) => {
  return (
    <div className="flex flex-row overflow-scroll no-scrollbar w-[348px] mt-2">
      {data?.map((employee: any) => (
        <div
          key={employee?.value}
          className="relative flex flex-col justify-center items-center mr-5 mb-2"
        >
          <Avatar src={employee?.avatar} size={40} />
          <CloseCircleFilled
            // onClick={() => removeEmployee(employee?.id)}
            className="absolute top-6 right-1 -mt-2 -mr-2 cursor-pointer text-xl text-secondary-70 bg-white rounded-full"
          />
          <Text className="text-secondary truncate">{employee?.label}</Text>
        </div>
      ))}
    </div>
  );
};

export default CustomPreview;
