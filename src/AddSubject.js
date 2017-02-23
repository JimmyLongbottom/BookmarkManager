//AddSubject JS

import React, {Component} from 'react';



export default class AddSubject extends Component{
  // constructor(props){
    // super(props);


  //this.addNewSubject = this.addNewSubject.bind(this);
  //this.handleTyping = this.handleTyping.bind(this);

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

    render(){
      return(
        <div>
          <form>
            <label htmlFor="subject"></label>
            <input id="subject" name="subject" onChange={this.handleTyping} ></input>
            <button id="addSubjectButton" onClick={this.addNewSubject}>Newer Subject</button>
          </form>
        </div>
      );
    }
}
//

//   <input value={this.state.subject}></input>
