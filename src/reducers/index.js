let initialState = {
  topHundreadTweets: [],
  currentShowingTweets: [],
  waitingForStream: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRIGGER_TWEETS":
      return {
        ...state,
        topHundreadTweets: [],
        currentShowingTweets: [],
        waitingForStream: true,
      };
    case "TWEET_RECIEVED":
      let ogList = [action.payload.tweet].concat(
        state.topHundreadTweets.slice(0, 99)
      );
      return {
        ...state,
        waitingForStream: false,
        topHundreadTweets: ogList,
        currentShowingTweets: ogList.slice(0, 10),
      };
    case "SHOW_MORE_TWEETS":
      let newList = state.topHundreadTweets.slice(
        0,
        state.currentShowingTweets.length + 10
      );
      return { ...state, currentShowingTweets: newList };
    default:
      return state;
  }
};
export default reducer;
