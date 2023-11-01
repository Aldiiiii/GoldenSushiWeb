import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function CreateModal() {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    Ingredients: [],
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(form);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Create Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={changeHandler}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={changeHandler}
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                onChange={changeHandler}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="categoryId"
                onChange={changeHandler}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredient</Form.Label>
              <Form.Control
                type="text"
                name="imgUrl"
                onChange={changeHandler}
                placeholder="Main Ingredient"
                autoFocus
              />
              <div style={{ display: "flex" }}>
                <Form.Control
                  type="text"
                  placeholder="Additional Ingredient"
                  autoFocus
                />{" "}
                <Button variant="white" className="text-danger">
                  Remove
                </Button>
              </div>
              <div style={{ display: "flex" }}>
                <Form.Control
                  type="text"
                  placeholder="Additional Ingredient"
                  autoFocus
                />{" "}
                <Button variant="white" className="text-danger">
                  Remove
                </Button>
              </div>
              <div style={{ display: "flex" }}>
                <Form.Control
                  type="text"
                  placeholder="Additional Ingredient"
                  autoFocus
                />{" "}
                <Button variant="white" className="text-danger">
                  Remove
                </Button>
              </div>              
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={submitHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;