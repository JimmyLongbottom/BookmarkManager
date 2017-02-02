import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();

this.state = {
  resources: [{title: "Thinking in React",
                url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
              {title: "another Title",
                url: "https://www.youtube.com/watch?v=vu_rIMPROoQ"},
              {title: "again, another title",
                url:"https://www.youtube.com/watch?v=IEf1KAcK6A8"}
                {title: "Review higher order functions",
                 url: https//www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84}
               ]
};

}
//eveent handlers her
  render() {
    return(
    <div>
      {this.state.resources.map((resource) =>{
        return <a href = {resource.url}>{resource.title}</a>
      })}
    </div>
    );
  }
}


export default App;
