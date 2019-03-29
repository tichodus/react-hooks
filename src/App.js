import React, { useState, useEffect } from "react";
import { Flex } from "reflexbox";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <Flex justify="center">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Flex>
  );
};

export default App;
