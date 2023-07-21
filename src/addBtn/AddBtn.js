import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddBtn = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [prix, setPrix] = useState(0);
  const [disc, setDisc] = useState(0);
  const submits = (e) => {
    e.preventDefault();
    if (img && name && prix && disc) {
      const newProd = {
        id: Math.random(),
        imgUrl: img,
        title: name,
        price: prix,
        disc: disc,
      };
      add(newProd);
      setImg("");
      setName("");
      setPrix("");
      setDisc("");
      handleClose();
    } else alert("Fill The Blank");
  };
  return (
    <div style={{ marginTop: "2em" }}>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Product:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submits}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Imgurl:</Form.Label>
              <Form.Control
                value={img}
                type="url"
                onChange={(e) => setImg(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
                type="number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>discount:</Form.Label>
              <Form.Control
                value={disc}
                onChange={(e) => setDisc(e.target.value)}
                type="number"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBtn;
