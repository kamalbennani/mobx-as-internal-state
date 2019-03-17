import React, { Component } from 'react';
import { Input } from 'antd';
import { Label } from './Label';

export class ReactExample extends Component {
  state = {
    query: '',
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });

    this.updateDoucmentTitle();
  }

  updateDoucmentTitle() {
    document.title = this.state.query;
  }

  render() {
    return (
      <div>
        <Label>React</Label>
        <Input value={this.state.query} onChange={this.handleChange} placeholder="React Example" />
      </div>
    );
  }
};
