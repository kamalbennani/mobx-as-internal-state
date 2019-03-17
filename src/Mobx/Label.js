import React from 'react';
import './Label.css';
import { observer } from 'mobx-react';

export const Label = observer((props) => (
  <div className="Label">{props.children}</div>
));