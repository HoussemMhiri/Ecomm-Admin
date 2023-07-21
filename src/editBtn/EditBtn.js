import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditBtn = ({ el, ed }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [img, setImg] = useState(el.imgUrl);
  const [name, setName] = useState(el.title);
  const [prix, setPrix] = useState(el.price);
  const [disc, setDisc] = useState(el.disc);
  const submits = (e) => {
    e.preventDefault();
    if (img && name && prix && disc) {
      const edited = {
        id: el.id,
        imgUrl: img,
        title: name,
        price: prix,
        disc: disc,
      };
      ed(edited);

      handleClose();
    } else alert("Fill The Blank");
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
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

export default EditBtn;
