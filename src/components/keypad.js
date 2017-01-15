// @flow
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import React from 'react';
import Key from './key';

function Keypad(props: Object) {
  const row1 = ['1','2','3','+'];
  const row2 = ['4','5','6','-'];
  const row3 = ['7','8','9','*'];
  const row4 = ['0','.','blank','/'];

  const numbers = ['1','2','3','4','5','6','7','8','9','0','.'];
  const operators = ["+", "-", "*", "/"];
  const clear = ["CLEAR", "UNDO"];

  let row1KeySet = row1.map((item) => {
    return (
      <Key
        key={item}
        value={item}
        handleClick={props.handleButtonClick}
      />
    );
  });

  let row2KeySet = row2.map((item) => {
    return (
      <Key
        key={item}
        value={item}
        handleClick={props.handleButtonClick}
      />
    );
  });

  let row3KeySet = row3.map((item) => {
    return (
      <Key
        key={item}
        value={item}
        handleClick={props.handleButtonClick}
      />
    );
  });

  let row4KeySet = row4.map((item) => {
    return (
      <Key
        key={item}
        value={item}
        handleClick={props.handleButtonClick}
      />
    );
  });

  let numberKeySet = numbers.map((number) => {
    return (
      <Key
          style={{margin: '2px', fontWeight: '900', backgroundColor: '#1565c0', color: '#fff'}}
          key={number}
          value={number}
          handleClick={props.handleButtonClick} />);
  });
  let operatorKeySet = operators.map((operator) => {
    return (
      <Key
          style={{margin: '2px', fontWeight: '900', backgroundColor: '#1565c0', color: '#fff'}}
          key={operator}
          value={operator}
          handleClick={props.handleButtonClick} />);
  });
  let clearKeySet = clear.map((clearKey) => {
    return (
      <Key
          style={{width: '75px', margin: '15px', fontWeight: '700', backgroundColor: '#f44336', color: '#fff'}}
          key={clearKey}
          value={clearKey}
          handleClick={props.handleClearClick} />);
  });
  return (
    <div>
      {row1KeySet}
      {row2KeySet}
      {row3KeySet}
      {row4KeySet}
      <br />
      <Button raised ripple style={{margin: '4px 1px 1px', width: '268px', fontWeight: '900', backgroundColor: '#4caf50', color: '#fff'}} onClick={props.calculate}>{'\uFF1D'}</Button>
      <br />
      {clearKeySet}

    </div>
  );
}

export default Keypad;
