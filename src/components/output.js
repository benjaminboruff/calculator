// @flow
import React from 'react';
import './output.css';

function Output(props: Object) {
  return (
    <div>
      <div id="result">{props.result}</div>
      <p id="input">{props.input}</p>
    </div>
  );
}

export default Output;
