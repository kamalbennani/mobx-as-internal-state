import React from 'react';
import DevTools from 'mobx-react-devtools';

import { Content } from './Content';
import { ReactRenderExample } from './React/Example4';
import { MobxRenderExample } from './Mobx/Example4';

import styles from './App.module.css';
import './App.css';

const App = () => (
  <div className={styles.row}>
    <Content>
      <ReactRenderExample />
    </Content>
    <Content>
      <MobxRenderExample />
    </Content>
    <DevTools />
  </div>
);

export default App;
