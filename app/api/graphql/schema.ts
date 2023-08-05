import gql from 'graphql-tag';

export const typeDefs = gql`
  type DogInfo {
    name: String
    image_link: String
    good_with_strangers: Int
    energy: Int
    good_with_other_dogs: Int
    min_life_expectancy: Int
  }

  type Result {
    status: String
    reason: String
    value: DogInfo
  }

  type Query {
    dogs(searchValue: String): Result
  }
`;
