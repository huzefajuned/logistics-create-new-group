import React from "react";
import { Avatar, Typography } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
const { Text } = Typography;

import { CustomPreviewProps } from "../interface/type";
// CustomPreview for Employees and Drivers ---
const CustomPreview: React.FC<CustomPreviewProps> = ({ data }) => {
  return (
    <div className="flex flex-row overflow-scroll no-scrollbar w-[348px] mt-2">
      {data?.map((entry: any) => (
        <div
          key={entry?.value}
          className="relative flex flex-col justify-center items-center mr-5 mb-2"
        >
          <Avatar src={entry?.avatar} size={40} />
          <CloseCircleFilled className="absolute top-6 right-1 -mt-2 -mr-2 cursor-pointer text-xl text-secondary-70 bg-white rounded-full" />
          <Text className="text-secondary truncate">{entry?.label}</Text>
        </div>
      ))}
    </div>
  );
};

export default CustomPreview;
