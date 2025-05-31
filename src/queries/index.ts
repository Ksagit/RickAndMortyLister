import {useInfiniteQuery} from '@tanstack/react-query';
import {CharacterPageSchema} from '../schemas';

export const useCharactersQuery = () => {
  return useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: async ({pageParam}) => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageParam}`,
      );
      const data = await response.json();

      const validatedData = CharacterPageSchema.parse(data);
      return validatedData;
    },
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.info.next) {
        const url = new URL(lastPage.info.next);
        return Number(url.searchParams.get('page'));
      }
      return undefined;
    },
  });
};
