import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li>
        Name: {this.props.band.name} 
        <button onClick={()=>this.props.deleteBand(this.props.band.id)}>Delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
