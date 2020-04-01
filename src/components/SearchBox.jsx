import React from "react";
import { triggerTweets } from "../actions";
import { connect } from "react-redux";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedItem: "",
    };
  }

  onChangeHandler = event => {
    this.setState({ searchedItem: event.target.value });
  };

  onKeyPressHandler = event => {
    if (event.key === "Enter") {
      this.props.dispatch(triggerTweets(this.state.searchedItem));
    }
  };

  render() {
    return (
      <div className='py-3'>
        <label htmlFor='search' className='mr-1 text-lg text-white'>
          Search
        </label>
        <input
          type='search'
          value={this.state.searchedItem}
          className='rounded-sm text-lg font-medium'
          onChange={this.onChangeHandler}
          onKeyPress={this.onKeyPressHandler}
        />
      </div>
    );
  }
}
const SearchBox = connect(state => {})(Search);
export { SearchBox };
