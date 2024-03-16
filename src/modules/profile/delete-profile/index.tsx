import { useNavigate } from "react-router-dom";
import { Alert } from "../../../components/Alert";
import { Avatar } from "../../../components/Avatar";
import { Loader } from "../../../components/Loader";
import styles from "./index.module.css";
import { useRemoveProfile } from "./hooks/use-RemoveProfile";

export const DeleteProfile = () => {
  const { profile, isLoading, deleteProfile, isPending, error } = useRemoveProfile();
  const navigate = useNavigate();

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
          <Avatar image={profile?.avatar.image} disabled />

          <h4>{profile?.avatar.name}</h4>
        </div>

        <h1 className="title">Delete Profile ?</h1>

        <p className={styles.p}>
          This will permanently delete all settings and preferences for this profile, including My
          List and Continue Watching.
        </p>

        <div className={styles.actions}>
          <button className="btn btn--full btn--white" onClick={deleteProfile} disabled={isLoading}>
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
