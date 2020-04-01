import React from "react";
import Animate from "animate.css-react";
import socketIOClient from "socket.io-client";
import SailsIOClient from "sails.io.js";
import { connect } from "react-redux";
import { Tweet } from "./Tweet";
import { config } from "../Constants";

class TweetList extends React.Component {
  componentDidMount() {
    const io = SailsIOClient(socketIOClient);
    io.sails.url = config.API_URL;
    io.socket.on("connect", () => {
      io.socket.on("tweets", tweet => {
        this.props.dispatch({ type: "TWEET_RECIEVED", payload: { tweet } });
      });
    });
    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (
          this.props.currentShowingTweets.length >= 10 &&
          this.props.currentShowingTweets.length !==
            this.props.topHundreadTweets.length
        ) {
          this.props.dispatch({ type: "SHOW_MORE_TWEETS" });
        }
      }

      if (window.pageYOffset === 0) {
        io.socket.on("tweets", tweet => {
          this.props.dispatch({ type: "TWEET_RECIEVED", payload: { tweet } });
        });
      }

      if (window.pageYOffset !== 0) {
        io.socket.off("tweets");
        io.socket.removeAllListeners("tweets");
      }
    };
    io.socket.on("disconnect", () => {
      io.socket.off("tweets");
      io.socket.removeAllListeners("tweets");
    });
  }

  render() {
    let tweetList;
    if (this.props.waitingForStream) {
      tweetList = (
        <p className='m-16 text-center text-lg'>
          Waiting for the new tweets...
        </p>
      );
    } else {
      tweetList = this.props.currentShowingTweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} />
      ));
    }
    return (
      <Animate enter='fadeIn' durationEnter={1000} component='div'>
        {tweetList}
      </Animate>
    );
  }
}

function mapStateToProps(state) {
  const { currentShowingTweets, topHundreadTweets, waitingForStream } = state;
  return { currentShowingTweets, topHundreadTweets, waitingForStream };
}

const TweetsList = connect(mapStateToProps)(TweetList);
export { TweetsList };
