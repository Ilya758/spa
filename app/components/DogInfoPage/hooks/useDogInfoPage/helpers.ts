import { FetchResponse } from '@/app/shared/models';
import { dogQuery } from './query';

export const getData = async <T>(searchValue: string) => {
  const result = await fetch('api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: dogQuery,
      variables: {
        searchValue,
      },
    }),
  });

  const response = (await result.json()) as FetchResponse<T>;
  const {
    dogs: { reason, value },
  } = response.data;

  if (reason) {
    return reason;
  }

  return value;
};
