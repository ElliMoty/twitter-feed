import gql from "graphql-tag";

export const TWITTER_FEED_QUERY = gql`
  query allTweets {
    allTweets {
      createdAt
      id
      message
      author
    }
  }
`;
