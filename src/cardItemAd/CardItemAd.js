import React from "react";
import { Button, Card } from "react-bootstrap";
import EditBtn from "../editBtn/EditBtn";

const CardItemAd = ({ el, del, ed }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.imgUrl} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text style={{ textDecoration: "line-through", color: "red" }}>
            Init Price: {el.price}
          </Card.Text>
          <Card.Text>Discount: {`${el.disc}%`}</Card.Text>
          <Card.Text style={{ color: "green" }}>
            Current Price: {`${el.price - (el.price * el.disc) / 100}$`}
          </Card.Text>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <EditBtn el={el} ed={ed} />

            <Button onClick={() => del(el.id)} variant="danger">
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItemAd;
