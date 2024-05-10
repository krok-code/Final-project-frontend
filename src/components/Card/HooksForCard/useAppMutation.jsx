import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useAppMutation = ({
  mutationKey,
  mutationFn,
  invalidateQueryKey
}) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [invalidateQueryKey ?? 'board']
      })
    }
  })
}
