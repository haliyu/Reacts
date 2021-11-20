import React from 'react';
import logo from './logo.svg'

// const Loading = () => {
//   return (
//     <div className="loading">
//       <h1>loading...</h1>
//     </div>
//   );
// };


function Loading() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{color: '#F0C38E'}}>loading...</h3>
      </header>
    </div>
  );
}

export default Loading;
