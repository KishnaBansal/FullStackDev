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


// import React from 'react';
// import Greetings from './Greetings';
// import Sample from './Sample';
// import Welcome from './Welcome';
// function HelloWorld() {
//   return <h1>Hello, World</h1>;
// }

// function App() {
//   return (
//     <div>
//       <HelloWorld />
//       <Greetings name="Peace" age={19} />
//         <Welcome name="Bob" age={44}/>
//         <Welcome name="Serene" age={30} />
//       <Sample name = "Peace" />
//     </div>
//   );
// }


// export default App;


import {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    },1500);
  });
  return <h1>Rendered {count} times!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;