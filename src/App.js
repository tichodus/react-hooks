import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Flex } from "reflexbox";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      style={{ height: "800px" }}
    >
      <div style={{ margin: "0 20px" }}>
        <h1>You clicked {count} times</h1>
      </div>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </Flex>
  );
};

export default App;
