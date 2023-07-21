import React from "react";
import "./Det.css";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Details = ({ els }) => {
  const params = useParams();
  const prod = els.find((el) => el.id === Number(params.id));
  return (
    <div style={{ margin: " 0 auto", maxWidth: 800, textAlign: "center" }}>
      <h1>About The product</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
        cupiditate quod rerum dolorum vitae blanditiis quibusdam id recusandae.
        Beatae repellat dolorum iusto accusantium animi commodi odio, voluptate
        perferendis aspernatur quod!
      </p>
      <Card style={{ width: "18rem", marginLeft: "15rem" }}>
        <Card.Img variant="top" src={prod.imgUrl} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text style={{ textDecoration: "line-through", color: "red" }}>
            Init Price: {prod.price}
          </Card.Text>
          <Card.Text>Discount: {`${prod.disc}%`}</Card.Text>
          <Card.Text style={{ color: "green" }}>
            Current Price: {`${prod.price - (prod.price * prod.disc) / 100}$`}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
