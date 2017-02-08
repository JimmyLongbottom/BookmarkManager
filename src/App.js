// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Subject from "./Subject.js";
//
// class App extends Component {
//   constructor (){
//     super();
//
// this.state = {
//   resources: [
//     {
//       subject: "Functional Programming Basics: Week 1",
//         resources: [
//           {
//             title: "Thinking in React",
//             url: "https://facebook.github.io/react/docs/thinking-in-react.html"
//           },
//
//           {
//             title: "Thinking in React",
//             url: "https://facebook.github.io/react/docs/thinking-in-react.html"
//           }]
//
//       },
//
//     {
//       subject: " Programming Basics: Week 2",
//         resources: [
//         {
//           title: "Thinking in React",
//           url: "https://facebook.github.io/react/docs/thinking-in-react.html"
//         },
//
//         {
//           title: "yep",
//           url: "#"
//         }
//       ]
//     }
//
//
//     ]
//
// }
//
// //beg render func
//                             //event handlers here
//   render (){
//     return (
//       <div>
//         {this.state.resources.map}((resource) =>{
//           return(
//             <li>
//             <Subject items = {resource}/>
//           </li>
//           )
//         })
//
//       </div>
//     );
//   }
//
// }
//
//
// export default App;

import React, { Component } from 'react';
import Subject from './Subject.js';

class App extends Component {
  constructor() {
    super();

    this.state = {resources: [

      {
        subject: "Functional Programming Basics",
        resources: [
          {
            title: "FunFunFunction Functional Programming Playlist",
            url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"
          },
          {
            title: "FunFunFunction var, let, and const",
            url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"
          },
          {
            title: "FunFunFunction arrow functions",
            url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"
          }
        ]
      },


      {
        subject: "ES6",
        resources: [
          {
            title: "Kyle Robinson Young ES6 Essentials",
            url: "https://www.youtube.com/watch?v=CozSF5abcTA"
          }
        ]
      },


      {
        subject: "Intro to React",
        resources: [
          {
            title: "Thinking in React",
            url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
          {
            title: "Mindspace React Tutorial",
            url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
          {
            title: "LearnCode Academy React Tutorial",
            url: "https://youtu.be/fd2Cayhez58"
          }
        ]
      }

    ]}
  }

  render() {

    return (
      <div style={{color:'darkBlue'}}>
        Parent Component
        <Subject items={this.state.resources[0]}/>
        <Subject items={this.state.resources[1]}/>
        <Subject items={this.state.resources[2]}/>
      </div>
    );
  }
}

export default App;
