import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function IngredientsModal() {
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
                      "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg"
                    }
                    style={{ height: "275px", width: "auto" }}
                    rounded
                  />                
              </div>
              <div style={{display: "flex", marginTop:"20px"}}>
                <Col xs={6} md={4}>
                  <Image
                    src={
                      "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg"
                    }
                    style={{ height: "75px", width: "auto" }}
                    rounded
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src={
                      "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg"
                    }
                    style={{ height: "75px", width: "auto" }}
                    rounded
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src={
                      "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg"
                    }
                    style={{ height: "75px", width: "auto" }}
                    rounded
                  />
                </Col>
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
