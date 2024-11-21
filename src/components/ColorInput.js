import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const ColorInput = ({ color, setColor, handleConvert }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default form submission behavior
      handleConvert();
    }
  };

  return (
    <Form>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Mã HEX, RGB, hoặc HSL"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          onKeyDown={handleKeyDown} // Handle Enter key
        />
        <Button variant="primary" onClick={handleConvert}>
          Chuyển đổi
        </Button>
      </InputGroup>
    </Form>
  );
};

export default ColorInput;
