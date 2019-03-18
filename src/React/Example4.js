import React, { Component } from "react";
import { Button, Input } from "antd";
import { Label } from './Label';

export class ReactRenderExample extends Component {
  state = {
    isCompleted: false,
    query: '',
    nbOfChanges: 0,
  };

  handleClick = () => {
    this.setState({
      isCompleted: !this.state.isComplete
    }); 
  }

  handleChange = () => {
    this.setState({
      nbOfChanges: this.state.nbOfChanges + 1
    });
  }

  render() {
    console.log('Render method is called');
    const { isCompleted, nbOfChanges } = this.state;
    return (
      <div>
        <Label>React</Label>
        <Button
          onClick={this.handleClick}
          type={isCompleted ? "success" : 'primary'}
          style={{ marginBottom: '5px' }}
        >
          {isCompleted ? '🎯 Completed' : '🌔 Loading'}
        </Button>
        <Input placeholder="Search" onChange={this.handleChange} />
        {!isCompleted && (
          `Number of changes: ${nbOfChanges}`
        )}
      </div>
    )
  }
}