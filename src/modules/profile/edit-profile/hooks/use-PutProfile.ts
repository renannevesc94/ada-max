import { MutateOptions, useMutation } from "@tanstack/react-query";
import { putProfile } from "../../../../services";
import { AxiosError } from "axios";
import { ProfilePutType } from "../../types";

//Recebe como parametros apções do useMutation   posição: 01 - tipo do rotorno - 02 -tipo erro - 03 tipo parametros
export const usePutProfile = (
  options?: MutateOptions<void, AxiosError<{ message: string }>, ProfilePutType>
) => {
  return useMutation<void, AxiosError<{ message: string }>, ProfilePutType>({
    mutationFn: async ({ id, body }) => {
      await putProfile(id, body);
    },
    ...options,
  });
};
