import React, { Component } from 'react';
import { Input, List, Alert } from 'antd';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import fuzzy from 'fuzzy';

import { Label } from './Label';
import { projects } from '../data';

@observer
export class MobxProjectExample extends Component {
  @observable query = '';

  handleChange = (event) => {
    this.query = event.target.value;
  }

  @computed
  get filteredProjects() {
    return fuzzy
      .filter(this.query, projects, {
        extract: project => project.name, // Apply the fuzzy search on the project name
      })
      .map(result => result.original); // Return the original project lis
  }

  render() {
    return (
      <div>
        <Label>Mobx</Label>
        <Input value={this.query} onChange={this.handleChange} placeholder="Filter on projects" />
        {this.renderInfoBar()}
        {this.renderProjectList()}
      </div>
    );
  }

  renderProjectList() {
    return (
      <List
        bordered
        dataSource={this.filteredProjects}
        renderItem={item => (<List.Item>{item.name}</List.Item>)}
      />
    )
  }

  renderInfoBar() {
    const nbResults = this.filteredProjects.length;
    return (
      <div style={{ padding: '12px 0' }}>
        <Alert message={`${nbResults} results`} type="info" showIcon />
      </div>
    )
  }
};
