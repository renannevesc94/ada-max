import { MutateOptions, useMutation } from "@tanstack/react-query";
import { deleteProfile } from "../../../../services";
import { AxiosError } from "axios";

export const useDeleteProfile = (
  options?: MutateOptions<void, AxiosError<{ message: string }>, number>
) => {
  return useMutation<void, AxiosError<{ message: string }>, number>({
    mutationFn: async (id: number) => {
      await deleteProfile(id);
    },
    ...options,
  });
};
