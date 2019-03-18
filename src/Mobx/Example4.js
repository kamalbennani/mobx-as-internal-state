import React, { Component } from "react";
import { observable } from "mobx";
import { Button, Input } from "antd";
import { observer } from "mobx-react";
import { Label } from './Label';

@observer
export class MobxRenderExample extends Component {
  @observable isCompleted = false;
  @observable query = '';
  @observable nbOfChanges = 0;

  handleClick = () => {
    this.isCompleted = !this.isCompleted; 
  }

  handleChange = () => {
    this.nbOfChanges++;
  }

  render() {
    console.log('Render method is called');
    return (
      <div>
        <Label>Mobx</Label>
        <Button
          onClick={this.handleClick}
          type={this.isCompleted ? "success" : 'primary'}
          style={{ marginBottom: '5px' }}
        >
          {this.isCompleted ? '🎯 Completed' : '🌔 Loading'}
        </Button>
        <Input placeholder="Search" onChange={this.handleChange} />
        {!this.isCompleted && (
          `Number of changes: ${this.nbOfChanges}`
        )}
      </div>
    )
  }
}