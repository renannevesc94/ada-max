import { ComponentPropsWithoutRef, forwardRef, useState } from "react";

import styles from "./index.module.css";
import { ButtonShowPassword } from "./ButtonShowPassword";

type InputProps = {
  label?: string;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }: InputProps, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={styles.container}>
        {label && (
          <label className={styles.label} htmlFor={props.id}>
            {label}
          </label>
        )}

        <div className={styles.inputWithIcon}>
          <ButtonShowPassword
            IconshowPassword={showPassword}
            onClick={() => setShowPassword(!showPassword)}
          />
          <input
            {...props}
            type={showPassword ? "text" : "password"}
            className={styles.input}
            ref={ref}
          />
        </div>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);
