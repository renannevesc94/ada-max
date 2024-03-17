import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProfile } from "../../hooks/useGetProfile.tsx/use-getProfile";
import { useDeleteProfile } from "./use-DeleteProfile";

export const useRemoveProfile = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { data, isLoading } = useGetProfile(id);
  const { mutate, isPending } = useDeleteProfile({
    onSuccess: () => {
      navigate("/profile");
    },
    onError: error => {
      setError(error.message);
    },
  });

  const deleteProfile = async () => {
    if (!data) {
      return;
    }
    mutate(data?.id);
  };

  return {
    profile: data,
    isLoading,
    deleteProfile,
    isPending,
    error,
  };
};
