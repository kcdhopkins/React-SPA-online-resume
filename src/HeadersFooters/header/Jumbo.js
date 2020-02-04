import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Jumbo = () => {
  return (
    <Jumbotron className="d-flex flex-column justify-content-center align-items-center jumbotron-bg-image">
      <h1>Keyairius Hopkins</h1>
      <p>
        Hey good looking what cha got cooking, must be cooking something good
        for me.
      </p>
      <p>
        <Button variant="primary">Click here</Button>
      </p>
    </Jumbotron>
  );
};

export default Jumbo;
