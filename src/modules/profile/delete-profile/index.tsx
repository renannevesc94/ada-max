import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Alert } from "../../../components/Alert";
import { Avatar } from "../../../components/Avatar";
import { Loader } from "../../../components/Loader";
import styles from "./index.module.css";
import { useGetProfile } from "../hooks/useGetProfile.tsx/use-getProfile";
import { useDeleteProfile } from "./hooks/use-DeleteProfile";

export const DeleteProfile = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { data, isLoading } = useGetProfile(id);
  const { mutate, isPending } = useDeleteProfile({
    onSuccess: () => {
      console.log("Foi apagado");
      navigate("/profile");
    },
    onError: error => {
      console.log(error);
      setError(error.message);
    },
  });

  const handleDelete = async () => {
    if (!data) {
      return;
    }
    mutate(data?.id);
  };

  if (error) {
    return (
      <Alert>
        {error} clica aqui pra voltar{" "}
        <button onClick={() => navigate("/profile")}>Voltar para o perfil</button>
      </Alert>
    );
  }

  return (
    <>
      <div className="container">
        <div className={styles.header}>
          <Avatar image={data?.avatar.image} disabled />

          <h4>{data?.avatar.name}</h4>
        </div>

        <h1 className="title">Delete Profile ?</h1>

        <p className={styles.p}>
          This will permanently delete all settings and preferences for this profile, including My
          List and Continue Watching.
        </p>

        <div className={styles.actions}>
          <button className="btn btn--full btn--white" onClick={handleDelete} disabled={isLoading}>
            Delete Profile
          </button>
          <button className="btn btn--full btn--primary" onClick={() => navigate("/profile")}>
            Cancel
          </button>
        </div>
      </div>

      {(isLoading || isPending) && <Loader />}
    </>
  );
};
