import React from 'react';
import { Content } from './Content';
import { ReactProjectExample } from './React/Example2';
import { MobxProjectExample } from './Mobx/Example2';
import styles from './App.module.css';
import './App.css';

const App = () => (
  <div className={styles.row}>
    <Content>
      <ReactProjectExample />
    </Content>
    <Content>
      <MobxProjectExample />
    </Content>
  </div>
);

export default App;
