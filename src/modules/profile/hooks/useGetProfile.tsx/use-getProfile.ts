import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../../services";

const CACHE_KEY = "profile";

export const useGetProfile = (id: number) => {
  return useQuery({
    queryKey: [CACHE_KEY, id],
    queryFn: async () => {
      const { data } = await getProfile(id);
      return data;
    },
  });
};
