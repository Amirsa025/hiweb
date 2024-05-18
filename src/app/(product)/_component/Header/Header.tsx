"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/app/_components/button";
import { IconLogout, IconPlus } from "@/app/_components/icons/icons";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/auth/store";
import { clearTokens, getUserName } from "@/store/auth/authSlice";
import { Modal } from "@/app/_components/modal/Modal";

import { useRouter } from "next/navigation";
import { AddProduct } from "../addproduct";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.getUserName);
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(getUserName());
  }, [dispatch]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (user) {
      setUserName(user);
    }
  }, [user]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <section className="flex items-center justify-between flex-wrap  px-4 py-6">
        <div className="space-x-[24px] flex items-center">
          <div
            onClick={() => {
              dispatch(clearTokens());
              router.replace("/");
            }}
            className="text-error/60 space-x-2 flex items-center cursor-pointer hover:text-error/90  transition-all"
          >
            <span>خروج</span>
            <IconLogout className="w-5" />
          </div>
          <span className="font-normal text-[1rem] text-gray-300">
            {userName}
          </span>
          <Button
            size="small"
            variant="success"
            className="!px-8 !py-[12px]"
            onClick={openModal}
          >
            <span>افزودن محصول</span>
            <IconPlus className="w-4 mt-1  " />
          </Button>
        </div>
        <div>لیست محصولات</div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddProduct onClose={closeModal} setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
};
