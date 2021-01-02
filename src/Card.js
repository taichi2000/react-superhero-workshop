import React from "react";

const Card = (props) => {
  return (
    <div className="card w-25 mr-2 mb-2">
      <img className="card-img-top" src={props.imageUrl} alt="user" />
      <div className="card-body">
        <p className="card-text">{props.name}</p>
      </div>
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Card;
