import React from "react";
import { Container } from "react-bootstrap";
import ColorConverter from "./components/ColorConverter";

function App() {
  return (
    <Container className="my-4 col-lg-4 col-md-6">
      <ColorConverter />
    </Container>
  );
}

export default App;
