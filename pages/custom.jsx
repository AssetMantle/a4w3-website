import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Toast from "react-bootstrap/Toast";

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const CustomPage = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-dark rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts&nbsp;
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Container>
  </Container>
);

export default CustomPage;
