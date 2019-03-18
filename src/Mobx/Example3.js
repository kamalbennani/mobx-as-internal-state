import React, { Component } from "react";
import { observable } from "mobx";
import { Button } from "antd";
import { observer } from "mobx-react";
import { Label } from './Label';

const appState = observable({
  count: 0
});

appState.increment = function() {
  this.count++;
}

appState.decrement = function() {
  this.count--;
}

@observer
export class MobxCounterExample extends Component {
  increment = () => {
    appState.increment();
  }

  decrement = () => {
    appState.decrement();
  }

  render() {
    return (
      <div>
        <Label>Mobx</Label>
        <Button.Group>
          <Button onClick={this.decrement}>-</Button>
          <Button disabled>{appState.count}</Button>
          <Button onClick={this.increment}>+</Button>
        </Button.Group>
      </div>
    )
  }
}