import React from 'react';
import './Content.css';

export const Content = (props) => {
  return (
    <div className="Content">
      {props.children}
    </div>
  )
}