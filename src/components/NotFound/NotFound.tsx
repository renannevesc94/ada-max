import { useNavigate } from "react-router-dom";
import S from "./index.module.css";
import { Button } from "../Button";
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={S.container}>
      <img src="./pageNotF.png" alt="" />
      <h1>Page Not Found</h1>
      <Button variant="subtle" onClick={() => navigate("/login")}>
        return to login
      </Button>
    </div>
  );
};
