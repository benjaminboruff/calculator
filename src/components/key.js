// @flow
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import React from 'react';
import './key.css';

function Key (props: Object) {
  let symbol;
  // a <Key value="1"/> component must have a value prop
  // that matches a known type
  if(props.value) {
    switch (props.value) {
      case '+':
        symbol = '\uFF0B';
        break;
      case '-':
        symbol = '\uFF0D';
        break;
      case '*':
        symbol = '\uFF0A';
        break;
      case '/':
        symbol = '\uFF0F';
        break;
      case '=':
        symbol = '\uFF1D';
        break;
      case 'blank':
        symbol = '0';
        break;
      default:
        // key is a number or CLEAR/UNDO
        symbol = props.value;
        break;
    }

    // CLEAR and UNDO keys
      if(props.value === 'CLEAR' || props.value === 'UNDO') {
        return(
          <Button
            id={props.value.toLowerCase()}
            raised
            value={props.value}
            onClick={props.handleClick}>
            {symbol}
          </Button>
        );
      }

      // equals key
      if(props.value === "=") {
        return(
          <Button
            id="equals"
            raised
            value={props.value}
            onClick={props.handleClick}>
            {symbol}
          </Button>
        );
      }

      // numbers and decimal
      if(props.value.match(/[0-9\.]/)) {
        return(
          <Button
            className="numops"
            raised
            value={props.value}
            onClick={props.handleClick}>
            {symbol}
          </Button>
        );
      }

      // operators
      if(props.value.match(/[\+\-\*\/]/)) {
        return(
          <Button
            className="numops"
            raised
            value={props.value}
            onClick={props.handleClick}>
            {symbol}
          </Button>
        );
      }

      // the blank button
      if(props.value === 'blank') {
        return(
          <Button
            disabled
            id="blank"
            value={props.value}
            onClick={props.handleClick}>
            <span>o</span>
          </Button>
        );
      }

    // else the value prop was not of the correct type
    return <Button>WRONG VALUE</Button>;

  } else {
    // no value prop was found
    return <Button>NO VALUE</Button>;
  }

}

export default Key;
