import React, { Component } from 'react';
import { Input, List, Alert } from 'antd';
import fuzzy from 'fuzzy';

import { Label } from './Label';
import { projects } from '../data';

export class ReactProjectExample extends Component {
  state = { query: '' };

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  getFilteredProjects() {
    return fuzzy
      .filter(this.state.query, projects, {
        extract: project => project.name, // Apply the fuzzy search on the project name
      })
      .map(result => result.original); // Return the original project lis
  }

  render() {
    return (
      <div>
        <Label>React</Label>
        <Input value={this.state.query} onChange={this.handleChange} placeholder="Filter on projects" />
        {this.renderInfoBar()}
        {this.renderProjectList()}
      </div>
    );
  }

  renderProjectList() {
    return (
      <List
        bordered
        dataSource={this.getFilteredProjects()}
        renderItem={item => (<List.Item>{item.name}</List.Item>)}
      />
    )
  }

  renderInfoBar() {
    const nbResults = this.getFilteredProjects().length;
    return (
      <div style={{ padding: '12px 0' }}>
        <Alert message={`${nbResults} results`} type="info" showIcon />
      </div>
    )
  }
};
