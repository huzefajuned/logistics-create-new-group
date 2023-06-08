import { SetStateAction } from "react";

export interface FormHeaderProps {
  heading: string;
  subheading: string;
}
export interface ButtonProps {
  type: any;
  label: string;
  isGhost: boolean;
  onClick: () => void;
  className?: string;
  buttonType?: "submit";
}

export interface CreateGroupProps {
  heading: string;
  subheading: string;
  primaryButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  selectedEmployees: selectedEmployeesAndDriversProps[];
  selectedDrivers: selectedEmployeesAndDriversProps[];
  setSelectedEmployees: React.Dispatch<
    SetStateAction<selectedEmployeesAndDriversProps[]>
  >;
  setSelectedDrivers: React.Dispatch<
    SetStateAction<selectedEmployeesAndDriversProps[]>
  >;
  showModal: () => void;
}
export interface CustomModalProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  selectAllEmployee: () => void;
}

export interface selectedEmployeesAndDriversProps {
  avatar: string;
  id?: string;
  value: string;
  label: string;
}

export interface EmployeeOrDriver {
  avatar: string;
  value: string;
  label: string;
}
export interface CustomPreviewProps {
  data: EmployeeOrDriver[];
}

export interface dataProps {
  id: string;
  avatar: string;
  label: string;
  value: string;
}

export interface formOptionsProps {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  options?: dataProps[];
  addAll?: string;
}
