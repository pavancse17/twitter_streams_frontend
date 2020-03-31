import React from "react";
import { SearchBox } from "./components/SearchBox";

function App() {
  return (
    <div>
      <div className='text-center bg-blue-600'>
        <SearchBox />
      </div>
      <div className='bg-indigo-200 mx-64'>
        <p>Hello</p>
      </div>
    </div>
  );
}

export default App;
