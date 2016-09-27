import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';


const API_KEY = 'AIzaSyDnjdROnSDby-N0Y48O9asK85EyTO3SAmI';

const App = function(){
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
