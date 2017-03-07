//Subject JS ///////////////////////////////////////////////////////////////


import React, { Component } from 'react';
import './Subject.css'


export default class Subject extends Component {
  constructor(props) {
    super(props);


    this.handleCLick = this.handleClick.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeResource = this.removeResource.bind(this);
    this.removeSubject = this.removeSubject.bind(this);


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

removeResource(e) {
  const index = this.props.index;
  const resc = e.target.id;
  this.props.removeResource(index, resc);
}

removeSubject(e) {
  const subIndex = this.props.subIndex;
  const subj = e.target.id;
  this.props.removeSubject(subIndex, subj);
}

  render() {
    return(
      <div className='sub'>

        <h2 >{this.props.items.subject}</h2>
          <button
            id=''
            onClick={this.props.removeSubject}>
            Remove Subject
          </button>

        <ul className='list'>
            {this.props.items.resources.map((resource, index) => {
              if(this.state.isClicked){
                return(
                  <li className="links" >
                    <a href={resource.url} name={resource.title}>{resource.title} </a>
                    &nbsp; &nbsp;
                    <button id={index}
                            onClick={this.removeResource}
                    >x</button>
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
          <input
            name="title"
            id="title"
            onChange={this.handleTyping}
            value={this.state.title}
          />
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
/////////////////END OF THE ROAD//////////////////////////////////////////////
