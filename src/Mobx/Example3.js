import React, { Component } from "react";
import { observable } from "mobx";
import { Button } from "antd";
import { observer } from "mobx-react";
import { Label } from './Label';

@observer
export class MobxCounterExample extends Component {
  @observable count = 0;
  
  increment = () => {
    this.count++;
  }
  
  decrement = () => {
    this.count--;
  }

  render() {
    return (
      <div>
        <Label>Mobx</Label>
        <Button.Group>
          <Button onClick={this.decrement}>-</Button>
          <Button disabled>{this.count}</Button>
          <Button onClick={this.increment}>+</Button>
        </Button.Group>
      </div>
    )
  }
}