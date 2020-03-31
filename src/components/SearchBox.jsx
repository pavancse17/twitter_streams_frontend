import React from "react";

class SearchBox extends React.Component {
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
      console.log("Enter key pressed");
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

export { SearchBox };
