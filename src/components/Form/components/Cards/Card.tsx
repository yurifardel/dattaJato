import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <label htmlFor="">Yuri Regis</label>
          </Card.Title>
          <Card.Text>
            <label htmlFor="">Modelo do veioculo: Onix preto 2020</label>
            <label htmlFor="">Endereço do proprietario: Manaira</label>
            <label htmlFor="">Telefone para contato: 8888888</label>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
