import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)
  }

  // event handlers

  render() {
    return(
      <div>
        <h2 style={{color:'brown'}}>{this.props.items.subject}</h2>

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
