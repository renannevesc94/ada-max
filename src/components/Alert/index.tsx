import { Link } from "react-router-dom";
import { IconWarning } from "../Icons";
import styles from "./index.module.css";

type AlertProps = {
  children: React.ReactNode;
};

export const Alert = ({ children }: AlertProps) => {
  return (
    <div className={styles.container}>
      <IconWarning />
      {children}
      <Link to={"/profile"}>
        <p>VOLTAR para o profile</p>
      </Link>
    </div>
  );
};
