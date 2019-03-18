import React from 'react';
import { Content } from './Content';
import { MobxCounterExample } from './Mobx/Example3';
import styles from './App.module.css';
import './App.css';

const App = () => (
  <div className={styles.row}>
    <Content>
      <MobxCounterExample />
    </Content>
  </div>
);

export default App;
