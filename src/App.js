import React, {Component, useReducer} from 'react';
import {Flex} from 'reflexbox';
import logo from './logo.svg';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <Flex justify="center" align="center" style={{height: '800px'}}>
      <div>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </div>
    </Flex>
  );
};

export default App;
