"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconClose } from "@/app/_components/icons/icons";
import {
  AnimationStage,
  ModalProps,
} from "@/app/_components/modal/modal.types";

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  onClose,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [animationStage, setAnimationStage] = useState<AnimationStage>(
    AnimationStage.Exited,
  );

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setAnimationStage(AnimationStage.Entering);
    } else {
      setAnimationStage(AnimationStage.Exiting);
    }
  }, [isOpen]);

  useEffect(() => {
    if (animationStage === AnimationStage.Entering) {
      const timer = setTimeout(
        () => setAnimationStage(AnimationStage.Entered),
        300,
      );
      return () => clearTimeout(timer);
    }
    if (animationStage === AnimationStage.Exiting) {
      const timer = setTimeout(() => {
        setVisible(false);
        setAnimationStage(AnimationStage.Exited);
        onClose();
      }, 300); // Match the transition duration
      return () => clearTimeout(timer);
    }
  }, [animationStage, onClose]);

  const handleClose = () => {
    setAnimationStage(AnimationStage.Exiting);
  };

  if (!visible && animationStage === AnimationStage.Exited) return null;

  return createPortal(
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 ${
        animationStage === AnimationStage.Entered ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative p-4 rounded-lg shadow-lg bg-white mx-4 w-[50rem] transition-transform duration-300 ${
          animationStage === AnimationStage.Entered
            ? "transform scale-100 opacity-100"
            : "transform scale-95 opacity-0"
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
