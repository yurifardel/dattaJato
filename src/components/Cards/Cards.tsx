import { Button, Row, Col, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


function Cards() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  function toggleShowA() {
    setShowA(!showA);
 }

 function toggleShowB() {
   setShowB(!showB);

 }

  return (
    <Row>
      <Col xs={6}>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={toggleShowA}>
          Toggle Toast <strong>with</strong> Animation
        </Button>
      </Col>
      <Col xs={6} className="my-1">
        <Toast onClose={toggleShowB} show={showB} animation={false}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={toggleShowB}>
          Toggle Toast <strong>without</strong> Animation
        </Button>
      </Col>
    </Row>
  );
}
export default Cards;
