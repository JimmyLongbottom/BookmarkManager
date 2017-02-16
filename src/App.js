

//App JS


      //my old friends:
// Parent Component
// <Subject items={this.state.resources[0]}/>
// <Subject items={this.state.resources[1]}/>
// <Subject items={this.state.resources[2]}/>
// <Subject items={this.state.resources[3]}/>




import React, { Component } from 'react';
import Subject from './Subject.js';


class App extends Component {
  constructor() {
    super();

    this.state = {resources: [

      {
        subject:"Intro and ES5 assessment / ES6 Intro - Week: 1",
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
        subject: "Core ES6  - Week: 2",
        resources: [
          {
            title: "Kyle Robinson Young ES6 Essentials",
            url: "https://www.youtube.com/watch?v=CozSF5abcTA"
          }
        ]
      },


      {
        subject: "Thinking in React  - Week: 3",
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
      },

      {
        subject: "Event Handling and Component Communication - Week: 4",
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
      },

      {
        subject: " Week: 5",
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

  addNewResource(subject, resource){
    const tempState = this.state;
    tempState.resources[subject].resources.push(resource);
    this.setState(tempState)
  }

  render() {

    return (
      <div>
        {this.state.resources.map((resource, index) =>{
            return(
                <Subject
                  index={index}
                  addReosurce={this.addNewResource}
                  items={resource}
                />
              )
          })
        }
      </div>
      );
    }
  }


export default App;
