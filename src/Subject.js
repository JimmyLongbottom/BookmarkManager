import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)


  // event handlers

this.handleCLick =this.handleClick.bind(this);
this.state = {
  isClicked: false
}



handleClick(){
  this.setState(prevState => ({
    isClicked : !prevState.isClicked
  }));
//  console.log(this.stste.isClicked)
//setTImeout(){
setTimeout(()=> {
  console.log(this.state.isCLicked)
}, 100}
}
}
}
}
  render() {
    return(
      <div>
        <h2 onClick={this.handleClick}>{this.props.items.subject}</h2>

        <ul>
          {this.props.items.resources.map((resource) => {
            return(
              <li>
                <a style={{color:'green'}} href={resource.url}>{resource.title}</a>
              </li>
            )}

          )}
        </ul>
      </div>
    )
  }

}
