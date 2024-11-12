// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Greetings from './Greetings';
import Sample from './Sample';
function HelloWorld() {
  return <h1>Hello, World</h1>;
}

function App() {
  return (
    <div>
      <HelloWorld />
      <Greetings name="Peace" />
      <Sample name = "Peace" />
    </div>
  );
}


export default App;