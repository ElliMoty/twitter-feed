import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { Container, Row, Col } from "react-bootstrap";
import { TWITTER_FEED_QUERY } from "./data/queries";
import { NEW_TWEET_SUBSCRIPTION } from "./data/subscriptions";
import TweetList from "./components/TweetList";
import TweetForm from "./components/TweetForm";

class TwitterFeed extends Component {
  
  componentDidMount() {
    this.props.tweets.subscribeToMore({
      document: NEW_TWEET_SUBSCRIPTION,
      updateQuery: (prevData, { subscriptionData }) => {
        if (!subscriptionData) {
          return prevData;
        }
        const newTweetItem = subscriptionData.data.Tweet.node;
        return {
          ...prevData,
          allTweets: [newTweetItem, ...prevData.allTweets]
        };
      }
    });
  }

  handleSubmitSuccess = () => {
    this.props.tweets.refetch();
  };

  render() {
    const { author, tweets } = this.props;
    // console.log('tweets: ', tweets);
    return (
      <Container>
        <Row>
          <Col sm={5}>
            <TweetForm
              handleSubmitSuccess={this.handleSubmitSuccess}
              author={author}
            />
          </Col>
          <Col sm={7}>
            <TweetList tweets={tweets.allTweets} loading={tweets.loading} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default compose(
  graphql(TWITTER_FEED_QUERY, {
    name: "tweets"
  })
)(TwitterFeed);
