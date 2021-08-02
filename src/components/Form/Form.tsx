import { Button, Row, Col, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Cards from './components/Cards/Card';

import "./style.css";

function Form() {
  const [showA, setShowA] = useState(false);

  function toggleShowA() {
    setShowA(!showA);
  }
  return (
    <div className="container">
      <div id="FormContainer">
        <h1>Seu lava jato mais inteligente</h1>

        <p>Agende gratuitamente</p>
        <Row>
          <Col xs={3}>
            <Button onClick={toggleShowA}>
              Clique para <strong>agendar</strong> seu horario
            </Button>
          </Col>
          <Col xs={6}>
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <strong className="me-auto">Agende seu horario</strong>
              </Toast.Header>
              <Toast.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="">Nome completo</label>
                <input type="text" />

                <label htmlFor="">Endereço</label>
                <input type="text" />

                <label htmlFor="">Telefone</label>
                <input type="text" />

                <label htmlFor="">Modelo do carro</label>
                <input type="text" />

                <Button style={{ marginTop: "10px" }}>Enter</Button>
              </Toast.Body>
            </Toast>
          </Col>

        </Row>

      </div>
      <Cards/>

    </div>
  );
}

export default Form;
