import { ComponentBase } from "@/app/_components/types/component-base.type";
import React from "react";

export type ModalProps = ComponentBase & {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
