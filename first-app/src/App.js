// import React from 'react';
// import {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

// // const  App =() => {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// //export default App;

// class App extends Component
// {
//   render()
//   {
//     return(
//           <div className="App">
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
//     );
//   }

// }
// export default App;

import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo/PersonalInfo';
import MyHobbies from './MyHobbies/MyHobbies';
import MyBooks from './MyBooks/MyBooks';

export default class App extends Component {
  render() {
    return (
      <div class="appStyle">
        <PersonalInfo/>
        <div class="divider"></div>
        <MyHobbies/>
        <div class="divider"></div>
        <MyBooks/>
      </div>
    )
  }
}
