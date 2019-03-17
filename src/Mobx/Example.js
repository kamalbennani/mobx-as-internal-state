import React, { Component } from 'react';
import { Input } from 'antd';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Label } from './Label';

@observer
export class MobxExample extends Component {
  @observable query = '';

  handleChange = (event) => {
    this.query = event.target.value;

    this.updateDoucmentTitle();
  }

  updateDoucmentTitle() {
    document.title = this.query;
  }

  render() {
    return (
      <div>
        <Label>Mobx</Label>
        <Input value={this.query} onChange={this.handleChange} placeholder="React Example" />
      </div>
    );
  }
};
