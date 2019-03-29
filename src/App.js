import React, {useState} from 'react';
import {Flex} from 'reflexbox';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const {visible, toggle} = useToggle();

  return (
    <Flex column justify="center" align="center">
      <Button variant="contained" onClick={toggle}>
        Toggle
      </Button>
      <p style={{display: visible ? 'block' : 'none'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus
        convallis elementum. Quisque mollis mauris nisl, ut accumsan dolor
        blandit ut. Aliquam euismod massa lobortis tortor lobortis viverra.
        Integer vitae odio rutrum, consequat ex ac, finibus elit. Sed eget
        mauris consectetur nisi vestibulum feugiat. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Nullam leo diam, lacinia at viverra
        ac, consequat eu tellus. Integer suscipit diam nec quam blandit, at
        tincidunt augue congue. Sed tristique augue ac metus pellentesque
        ultrices.
      </p>
    </Flex>
  );
};

const useToggle = () => {
  const [visible, toggle] = useState(false);

  return {
    visible,
    toggle: () => {
      toggle(!visible);
    },
  };
};

export default App;
