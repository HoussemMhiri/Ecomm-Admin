import React from "react";
import "./Card.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Carditem = ({ el }) => {
  const add = (x) => {
    alert(`${x} is added to the shop cart`);
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.imgUrl} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text style={{ textDecoration: "line-through", color: "red" }}>
            Init Price: {`${el.price}$`}
          </Card.Text>
          <Card.Text>Discount: {`${el.disc}%`}</Card.Text>
          <Card.Text style={{ color: "green" }}>
            Current Price: {`${el.price - (el.price * el.disc) / 100}$`}
          </Card.Text>
          <Link to={`/product/${el.id}`}>
            <Button style={{ marginRight: 10 }} variant="primary">
              Details
            </Button>
          </Link>
          <Button onClick={() => add(el.title)} variant="primary">
            Add
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Carditem;
