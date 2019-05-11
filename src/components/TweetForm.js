import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { CREATE_TWEET_MUTATION } from "../data/mutations";

class TweetForm extends Component {
  state = {
    message: ""
  };

  submit = async event => {
    event.preventDefault();
    console.log(this.state.message, this.props.author);
    const createTweetResult = await this.props.createTweetMutation({
      variables: {
        message: this.state.message,
        author: this.props.author
      }
    });

    if (createTweetResult.data.createTweet.id) {
      this.props.handleSubmitSuccess();
    }
  };
  render() {
    const { message } = this.state;
    return (
      <form onSubmit={this.submit}>
        <textarea
          className="textarea"
          value={message}
          placeholder="Please type your tweet here..."
          onChange={event => {
            this.setState({ message: event.target.value });
          }}
          maxLength={140}
        />
        <button>Tweet</button>
      </form>
    );
  }
}

export default compose(
  graphql(CREATE_TWEET_MUTATION, {
    name: "createTweetMutation"
  })
)(TweetForm);
