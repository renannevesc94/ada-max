import { Button, Loader, Title } from "../../../components";

import { Link } from "react-router-dom";
import { useProfile } from "./hooks/use-profile";
import { AvatarItem } from "../../../components/Avatar/AvatarItem";
import clsx from "clsx";
import S from "./index.module.css"

export const Profile = () => {
  const { profiles, goToPage, isEditing, toggleEditing, isLoading } = useProfile();

  return (
    <>
      <div className={S.container}>
        <div className={S.section}>
          <Title>Who’s Watching?</Title>

          {/* TODO: componentizar esses aqui */}
          <div className={S.avatars}>
            {profiles?.map(profile => (
              <AvatarItem //Criado componente Avatar Item
                key={profile.id}
                isEditing={isEditing}
                image={profile.avatar.image}
                name={profile.name}
                onClick={() => {
                  goToPage(profile.id);
                }}
              />
            ))}
            {/* <Link to="/create-profile" className={`${S.avatar__item} ${S.avatar__item--new}`}> */}
            <Link to="/create-profile" className={clsx("avatar__item avatar__item--new", S.avatar__item )}>
              <div className={S.avatar__image}>+</div>
              {/* <div className="avatar__image">+</div> */}
              <div className={S.avatar__name}>New Profile</div>
              {/* <div className="avatar__name">New Profile</div> */}
            </Link>
          </div>

          <div className={S.avatar__actions}>
            <Button variant="filled" onClick={toggleEditing}>
              {isEditing ? "Done" : "Edit"}
            </Button>
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};
