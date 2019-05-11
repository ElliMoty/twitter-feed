import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { Container, Row, Col } from "react-bootstrap";
import { TWITTER_FEED_QUERY } from "./data/queries";
import TweetList from './components/TweetList'

class TwitterFeed extends Component {
  render() {
    const { author, tweets } = this.props;
    // console.log('tweets: ', tweets);
    return (
      <Container>
        <Row>
          <Col sm={5}>Form will go here</Col>
          <Col sm={7}><TweetList tweets={tweets.allTweets} loading={tweets.loading}/></Col>
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
