import React from "react";
import { SearchBox } from "./components/SearchBox";
import { TweetsList } from "./components/TweetsList";
function App() {
  return (
    <div>
      <div className='text-center bg-blue-600'>
        <SearchBox />
      </div>
      <div className='mx-auto lg:w-1/2 md:w-2/3'>
        <TweetsList />
      </div>
    </div>
  );
}

export default App;
