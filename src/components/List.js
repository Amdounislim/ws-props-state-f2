import React from "react";
import UserCard from "./UserCard";

const List = ({ persons }) => {
  return (
    <div style={{display:"flex"}}>
      {persons.map((el, i) => (
        // <div>
        //   <h1>{el.name}</h1>
        //   <p>{el.email}</p>
        // </div>
        <UserCard person={el} key={i} />
      ))}
    </div>
  );
};

export default List;
