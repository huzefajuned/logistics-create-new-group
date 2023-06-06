"use client";
import React, { useState } from "react";
import { Button, Modal, Typography } from "antd";
import selectionPng from "../../public/images/selection.png";
import Image from "next/image";
const { Title } = Typography;

const ModalBox: React.FC<any> = (props) => {
  const { isModalOpen, handleOk, handleCancel, selectAllEmployee } = props;
  return (
    <Modal
      closable={false}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      width={390}
      // style={{ backgroundColor: "blue", width: 390, height: 285 }}
    >
      <div className=" flex flex-col justify-center text-center items-center m-auto  w-[390px] h-[285px]  bg-green-300 ">
        <Image height={43} width={43} src={selectionPng} alt="selctionPng" />
        <Title level={4} className="font-semibold text-secondary mt-3">
          Are you sure?
        </Title>
        <p className="text-sm text-secondary font-normal">
          Please confirm that you want to add all the employee in the group?
        </p>
        <div className="flex fle-row justify-between items-center w-full  mt-5">
          <Button
            onClick={handleCancel}
            ghost
            type="primary"
            className="text-white h-12 tracking-wide"
          >
            Cancel
          </Button>
          <Button
            onClick={selectAllEmployee}
            type="default"
            className="bg-gradient-to-r from-[#3374EA] to-[#8332F5]  text-white h-12 tracking-wide"
          >
            Add All Employee
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalBox;
