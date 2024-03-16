import { ComponentPropsWithoutRef } from "react";
import { IconEyeClosed, IconEyeOpened } from "..";

type ShowPasswordProps = {
  IconshowPassword: boolean;
} & ComponentPropsWithoutRef<"button">;

export const ButtonShowPassword = ({ IconshowPassword, ...props }: ShowPasswordProps) => {
  return (
    <button className="eye" type="button" {...props}>
      {IconshowPassword ? <IconEyeClosed /> : <IconEyeOpened />}
    </button>
  );
};
