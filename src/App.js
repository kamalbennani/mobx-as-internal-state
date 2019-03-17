import React from 'react';
import { Content } from './Content';
import { ReactExample } from './React/Example';
import { MobxExample } from './Mobx/Example';
import styles from './App.module.css';
import './App.css';

const App = () => (
  <div className={styles.row}>
    <Content>
      <ReactExample />
    </Content>
    <Content>
      <MobxExample />
    </Content>
  </div>
);

export default App;
