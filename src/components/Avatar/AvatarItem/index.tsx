import { ComponentPropsWithoutRef } from "react";
import { Avatar } from "../../../components/Avatar/index";
import style from "./index.module.css";

type AvatarItemProps = {
  name: string;
  image: string;
  isEditing: boolean;
} & ComponentPropsWithoutRef<"button">;

export const AvatarItem = ({ name, image, isEditing, ...props }: AvatarItemProps) => {
  return (
    <button className={style.avatar__item} {...props}>
      <Avatar image={image} isEdit={isEditing} />
      <div className={style.avatar__name}>{name}</div>
    </button>
  );
};
