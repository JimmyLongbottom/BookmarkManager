import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from ./Subject.js;
class App extends Component {
  constructor (){
    super();

this.state = {resources: [
   {subject: "Functional Programming Basics",
    resources: [{
     title: "Thinking in React",
     url: "https://facebook.github.io/react/docs/thinking-in-react.html"},

     {title: "Given Title",
      url: "#"}]

  {subject: "given subject"
    resources: [
      {
      title: "another Title",
      url: "https://www.youtube.com/watch?v=vu_rIMPROoQ"
    },
      title: "another given title",
      url: "#"
    }


  {subject: ES6,
          resources : [{
            title: "again, another title",
            url:"https://www.youtube.com/watch?v=IEf1KAcK6A8"}]
    }

}};

}
//eveent handlers her
  render() {
    return(
    <div>
      Parent Component
      <Subject />
    </div>
    );
  }
}


export default App;
