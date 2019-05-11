import React from "react";

const TweetList = props => {
  //   console.log("is loading: ", props.loading);
  if (props.loading) {
    return <div>We are loading...</div>;
  }
  return props.tweets.map(tweet => (
    <div className="tweet-list__tweet--container" key={`tweet_${tweet.id}`}>
      <h5 className="tweet-list__tweet--author">{tweet.author}</h5>
      <span className="tweet-list__tweet--message">{tweet.message}</span>
    </div>
  ));
};

export default TweetList;
