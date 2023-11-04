import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function Additional({removeInputForm, ingredientsHandler, form}) {
  return (
    <>
    <div style={{display: "flex"}}>
      <Form.Control name="ingredients" className="mb-2" type="text" placeholder="Ingredient" autoFocus />{" "}
      <Button  variant="white" className="text-danger">
        Remove
      </Button>

      {/* <Form.Control name="ingredients" value={form.ingredients || ''} onChange={ingredientsHandler} className="mb-2" type="text" placeholder="Ingredient" autoFocus />{" "}
      <Button onClick={removeInputForm} variant="white" className="text-danger">
        Remove
      </Button> */}

    </div>
    </>
  );
}
