import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function IngredientsModal({ingredients, imgUrl}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" size="sm" onClick={handleShow}>
        Show Ingredients
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Images</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <div style={{justifyContent: "center", display: "flex", alignContent:"center"}}>                
                  <Image
                    src={
                      imgUrl
                    }
                    style={{ height: "275px", width: "auto" }}
                    rounded
                  />                
              </div>
              <div style={{marginTop:"20px"}}>
                    <h4>Ingredients: </h4>
                    <table className="ml-4">
                      <thead>
                        <tr>
                          <th style={{width:"45px"}}>No.</th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ingredients.map((el,i) => (
                          <tr key={el.id}>
                          <td>{i+1}.</td>
                          <td>{el.name}</td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
              </div>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default IngredientsModal;
