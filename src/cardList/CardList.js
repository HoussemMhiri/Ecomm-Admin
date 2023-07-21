import React from "react";
import "./CardList.css";
import Carditem from "../cardItem/Carditem";

const CardList = ({ data, inps }) => {
  return (
    <main>
      {data
        .filter((el) =>
          el.title.trim().toLowerCase().includes(inps.trim().toLowerCase())
        )
        .map((el) => (
          <Carditem key={el.id} el={el} />
        ))}
    </main>
  );
};

export default CardList;
