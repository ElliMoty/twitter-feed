import gql from "graphql-tag";

export const TWITTER_FEED_QUERY = gql`
  query allTweets {
    allTweets(
      orderBy: createdAt_DESC
      first: 5
    ) {
      id
      message
      author
      createdAt
    }
  }
`;
