import React from "react";
import CardItemAd from "../cardItemAd/CardItemAd";
import AddBtn from "../addBtn/AddBtn";

const AdmCardList = ({ data, add, del, ed }) => {
  return (
    <div>
      <main>
        {data.map((el) => (
          <CardItemAd key={el.id} el={el} del={del} ed={ed} />
        ))}
      </main>
      <AddBtn add={add} />
    </div>
  );
};

export default AdmCardList;
