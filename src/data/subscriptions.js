import gql from "graphql-tag";

export const NEW_TWEET_SUBSCRIPTION = gql`
  subscription newTweets {
    Tweet(filter: { mutation_in: [CREATED] }) {
      mutation
      node {
        id
        message
        author
        createdAt
      }
    }
  }
`;
