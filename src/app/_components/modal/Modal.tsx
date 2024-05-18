"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconClose } from "@/app/_components/icons/icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  onClose,
  ...rest
}) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  if (!isOpen && !visible) return null;

  return createPortal(
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-[30%] flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose} // Close modal when clicking on the backdrop
    >
      <div
        className={`relative p-4 rounded-[1rem] shadow-lg bg-white mx-4 w-[50rem] transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute top-0 left-0 ml-4 mt-2 cursor-pointer"
          onClick={handleClose}
        >
          <IconClose className="w-4" />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
};
