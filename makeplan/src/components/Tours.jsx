import React from "react";
import Card from "./Card";
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <div className="container">
         
          <h1 className="title">PLAN WITH LOVE</h1>
        

          <div className="cards">
          {tours.map((tours) => {
            {
              return <Card key={tours.id} {...tours} removeTour={removeTour} />;
            }
          })}
          </div>
      </div>
    </>
  );
};

export default Tours;
