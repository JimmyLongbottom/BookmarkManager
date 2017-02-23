
//App JS

import React, { Component } from 'react';
import Subject from './Subject.js';
import './Subject.css';
import AddSubject from './AddSubject.js';


export default class App extends Component {
  constructor() {
    super();

    this.addNewResource = this.addNewResource.bind(this);
    this.addNewSubject = this.addNewSubject.bind(this);
    this.handleTyping = this.handleTyping.bind(this);

    //this.removeResource = this.removeResource.bind(this);

    this.state = {subject:'',
                  resources: [

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

  addNewSubject(e) {
    e.preventDefault();
    const newSubject = {
      subject: this.state.subject,
      resources: []
    };
    const tempState = this.state;
    tempState.resources.push(newSubject);
    this.setState(tempState);
  }


  handleTyping(e) {
    this.setState({[e.target.name]: e.target.value});
  }

//   //remove a resource
// removeResource(removeName){
//   const filteredNames = this.state.resources.filter( resource => {
//     return resource !== removeName;
//   });
//   this.setState({resources: filteredNames});
// }


render() {
  return (
    <div>
      <div id="addSubject">
        {
          this.state.resources.map((resource, index) => {
            return(
              <Subject index={index} addResource={this.addNewResource} removeResource={this.removeResource} items={resource}/>
            )
          })
        }
        <div>
          <form>
            <label htmlFor="subject"></label>
            <input id="subject" name="subject" onChange={this.handleTyping} value={this.state.subject}></input>
            <button id="addSubjectButton" onClick={this.addNewSubject}>New Subject</button>
          </form>
          <AddSubject/>
        </div>
      </div>
    </div>
  );
}
}
