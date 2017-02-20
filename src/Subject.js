
//Subject JS


import React, { Component } from 'react';
import './Subject.css';
import './logo.svg';

export default class Subject extends Component {
  constructor(props) {
    super(props);

    // event handlers
    this.handleCLick = this.handleClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isClicked: true,
      title: '',
      url: '',
    }
}

handleSubmit(e){
  e.preventDefault();
  const newResource = {
    title: this.state.title,
    url: this.state.url,
  }
  this.props.addResource(this.props.index, newResource);
}

handleClick(){
  this.setState(prevState => ({
    isClicked : !prevState.isClicked
  }));
}

handleTyping(e){
  this.setState({[e.target.name]: e.target.value})
}
              //  console.log(this.state.isClicked)
              //setTimeout(){
// setTimeout(()=> {
//   console.log(this.state.isCLicked)
// }, 100}

  render() {
    return(
      <div className='sub'>
        <h2 onClick={this.handleClick}>{this.props.items.subject}</h2>

        <ul className='list'>
          {this.props.items.resources.map((resource) => {
            if(this.state.isClicked){
              return(
                <li className="links">

                  <a  href={resource.url}>{resource.title}</a>
                  &nbsp; &nbsp;
                  <button id='removeButton'>X</button>
                </li>
              )}
            })
          }
          <figure className='circle'></figure>
        <br/>
        </ul>
        <form id='form'>

          <label htmlFor="title">Title</label>
          &nbsp;
          <input name="title" id="title" onChange={this.handleTyping} value={this.state.title}/>
          <br/><br/>
          <label htmlFor="url">URL</label>
          &nbsp;
          <input name="url" id="url" onChange={this.handleTyping} value={this.state.url}/>
          <br/><br/>
          <button className="addButton" onClick={this.handleSubmit}>Add Resource</button>
        </form>
      </div>
    )
  }

}
