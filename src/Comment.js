import React, { Component } from 'react';
import './index.css';

let count = 0;
class Comment extends Component {
  constructor() {
    super();
  //  console.log("Hi, I am constructor");
    this.state = {
      comment: '',
      listOfComments: []

    };
  }
  handleChangeOfName = event => {
    
   
    console.log(this.state.comment);
    this.setState({
      comment: event.target.value,
    });
  };
  addComment = event => {
    count++;
    this.setState({
      listOfComments: [...this.state.listOfComments, this.state.comment],
      comment: ""
    })
  }
  // delete = (value) =>{
  //   let filtered = this.state.listOfComments.filter((eachItem) => {
  //     return eachItem !== value
  //   }
  //   )
  //   this.setState({
  //     listOfComments: filtered
  //   })
  // }
  // componentDidMount(){
  //       console.log("Hi, I am ComponentDidMount");

  // }
  render() {
        //console.log("Hi, I am render");

    return (
      <div>
       <div>
         <p id="s">Comments({count})</p>
         </div>
        {

  this.state.listOfComments.map(eachElm => (
  <p style={{border: `2px solid ${this.props.color}`, padding: '5px'}}>{eachElm}</p>
  ))
}
          <textarea id="txt" type="text"
          onChange={event => this.handleChangeOfName(event)}
          value={this.state.comment}
          placeholder="Enter comment here..." /><br/><br/>
        <button id="comment" onClick={this.addComment}> Comment </button>

      </div>
    );
  }
};

export default Comment