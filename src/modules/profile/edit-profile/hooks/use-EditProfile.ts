import { useNavigate } from "react-router-dom";
import { usePutProfile } from "./use-PutProfile";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfilePutSchema, ProfilePutType } from "../../types";

import { useState } from "react";
import { AvatarType } from "../../../../types";

export const useEditProfile = () => {
  const [avatar, setAvatar] = useState<AvatarType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfilePutType>({
    resolver: zodResolver(ProfilePutSchema),
  });

  const { mutate, isPending } = usePutProfile({
    onSuccess: () => {
      navigate("/profile");
    },
    onError: error => {
      return error.response?.data?.message || "Erro desconhecido";
    },
  });

  const submitEdit = ({ id, body }: ProfilePutType) => {
    mutate({ id, body });
  };

  const selectAvatar = (avatar: AvatarType) => {
    setAvatar(avatar);
    setValue("body.avatarId", avatar.id);
    setIsOpen(false);
  };

  return {
    isPending,
    register,
    setValue,
    errors,
    avatar,
    isOpen,
    selectAvatar,
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
    isDisabled: !avatar,
    handleSubmit: handleSubmit(submitEdit),
  };
};
