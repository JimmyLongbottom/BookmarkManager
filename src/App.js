import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super();

this.state = {
  resources: [{title: "thinking in react",
                url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
              {title: "another Title",
              url: "https://www.youtube.com/watch?v=vu_rIMPROoQ"},
              {title: "again, another title",
              url:"https://www.youtube.com/watch?v=IEf1KAcK6A8"}]
};

}
//eveent handlers her
  render() {
    return(
    <div>
      {this.state.resources.map((resource) =>{
        return <a href = {resource.url}>{resource}</a>
      })}
    </div>
    );
  }
}


export default App;
