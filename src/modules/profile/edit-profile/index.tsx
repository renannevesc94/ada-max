import { Alert, Avatar, Button, Input, Loader } from "../../../components";
import { AvatarPicker } from "../components/avatar-picker";
import styles from "./index.module.css";
import { useGetProfile } from "../hooks/useGetProfile.tsx/use-getProfile";
import { useEditProfile } from "./hooks/use-EditProfile";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const EditProfile = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const { data, isLoading, error } = useGetProfile(id);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    errors,
    avatar,
    selectAvatar,
    isOpen,
    close,
    open,
    isDisabled,
    setValue,
    isPending,
  } = useEditProfile();

  useEffect(() => {
    if (data) {
      selectAvatar(data.avatar);
      setValue("body.name", data.name);
    }
  }, [data]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.limiter}>
          <div className={styles.container}>
            <h1 className="title">Edit Profile</h1>
            <div className={styles.flexcenter} onClick={open}>
              <Avatar image={avatar?.image} isEdit />
            </div>

            <form onSubmit={handleSubmit}>
              <Input
                label="Profile Name"
                disabled={isLoading}
                {...register("body.name")}
                error={errors?.body?.name?.message}
              />
              <Input type="hidden" {...register("id")} error={errors?.id?.message} value={id} />
              <Input type="hidden" {...register("body.avatarId")} />
              <div className={styles.actions}>
                <Button type="submit" fullWidth disabled={isDisabled}>
                  Done
                </Button>
                <Button variant="subtle" onClick={() => navigate(`/delete-profile/${id}`)}>
                  Delete Profile
                </Button>
              </div>
            </form>
            {error && <Alert>{error.message}</Alert>}
          </div>
        </div>
      </div>
      {isOpen ? <AvatarPicker onSelectAvatar={selectAvatar} onClose={close} /> : null}

      {(isLoading || isPending) && <Loader />}
    </>
  );
};
