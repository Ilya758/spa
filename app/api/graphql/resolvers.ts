import { client } from '@/app/api/graphql/helpers';

export const resolvers = {
  Query: {
    dogs: async (_: unknown, { searchValue }: { searchValue: string }) => {
      try {
        const result = await client
          .collections('dogs')
          .documents()
          .search({
            q: searchValue,
            query_by: 'name',
          })
          .then(result => {
            if (result.hits && result.hits.length) {
              const [{ document }] = result.hits;

              return document;
            }

            return null;
          });

        return {
          status: 'fullfilled',
          value: result,
        };
      } catch (error) {
        return {
          status: 'rejected',
          reason: (error as Error).message,
        };
      }
    },
  },
};
