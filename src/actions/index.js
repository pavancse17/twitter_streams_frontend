export const triggerTweets = searchItem => {
  return {
    type: "TRIGGER_TWEETS",
    payload: { searchItem },
  };
};
