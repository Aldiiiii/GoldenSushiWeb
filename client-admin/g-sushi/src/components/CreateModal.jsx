import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Additional from "./Additional";
import { useEffect } from "react";

function CreateModal() {
  const [show, setShow] = useState(false);
  const [addIngredient, setAddIngredient] = useState({
    inputForm: [],
  });

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    ingredients: [],
  });

  const bahanBahan = form.ingredients;

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const ingredientsHandler = (e) => {
    const { name, value } = e.target;
    console.log(e);
    // setForm({
    //   ...form,
    //   [name]: [...form.ingredients, value],
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(form);
  };

  const addInputForm = () => {
    const add = <Additional />;
    setAddIngredient({
      ...addIngredient,
      newForm: addIngredient.inputForm.push(
        <Additional
          form={form}
          key={addIngredient.inputForm.length}
          removeInputForm={removeInputForm}
          ingredientsHandler={ingredientsHandler}
        />
      ),
    });
  };

  const removeInputForm = () => {
    setAddIngredient({
      ...addIngredient,
      newForm: addIngredient.inputForm.pop(),
    });
  };

  useEffect(() => {
    console.log(addIngredient);
  }, [addIngredient]);

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
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imgUrl"
                onChange={changeHandler}
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredient</Form.Label>
              <Form.Control
                name="ingredients2"
                onChange={(e) =>
                  setForm({ ...form, ingredients2: e.target.value })
                }
                className="mb-2"
                type="text"
                placeholder="Ingredient"
                autoFocus
              />{" "}
              <div>
                {addIngredient.inputForm.map((el, i) => {
                  return el;
                })}
              </div>
              <Button
                onClick={addInputForm}
                variant="white"
                className="text-success"
              >
                Add more ingredient
              </Button>
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
