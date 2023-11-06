import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useToggleModal from "../hooks/useToggleModal";
import { useDispatch } from "react-redux";
import { createItem } from "../stores/actions/actionCreators";


function CreateModal({ categories }) {
  const [show, handleClose, handleShow] = useToggleModal();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    imgUrl: "",
    ingredients: [
      {
        name: "",
      },
    ],
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

    dispatch(createItem(form, handleClose));
  };

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
              <Form.Select
                name="categoryId"
                onChange={changeHandler}
                aria-label="Default select example"
              >
                <option>Open this select category</option>
                {categories.map((el) => (
                  <option value={el.id} key={el.id}>
                    {el.name}
                  </option>
                ))}
              </Form.Select>
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
              <Form.Label>Ingredients</Form.Label>
              <div style={{ display: "flex" }}>
                <div>
                  {form.ingredients.map((item, index) => (
                    <Form.Control
                      className="mb-2"
                      style={{ width: "390px" }}
                      key={index}
                      value={item.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          ingredients: [
                            ...form.ingredients.slice(0, index),
                            { name: e.target.value },
                            ...form.ingredients.slice(index + 1),
                          ],
                        })
                      }
                    />
                  ))}
                </div>
                <div className="">
                  {form.ingredients.map((item, index) => (
                    <Button
                      className="mb-2 text-danger"
                      key={index}
                      variant="white"
                      onClick={() => {
                        const currentItems = form.ingredients;
                        currentItems.splice(index, 1);

                        setForm({
                          ...form,
                          ingredients: currentItems,
                        });
                      }}
                    >
                      Remove
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={() =>
                  setForm({
                    ...form,
                    ingredients: [...form.ingredients, { name: "" }],
                  })
                }
                variant="white"
                className="text-success"
              >
                Add ingredient
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
