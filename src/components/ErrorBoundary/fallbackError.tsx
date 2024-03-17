import { useNavigate } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";

import { Button } from "../Button";

import style from "./index.module.css";

export const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <TbFaceIdError size={300} />

      <h1>Something went wrong:</h1>
      <p>{error?.message}</p>
      <Button variant="subtle" onClick={() => navigate("/login")}>
        return to login
      </Button>
    </div>
  );
};
