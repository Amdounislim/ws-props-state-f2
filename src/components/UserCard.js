import React from "react";
import "./UserCard.css";
import propTypes from 'prop-types'
import { Card, Col, Image, Button } from "react-bootstrap";

// const UserCard = ({name, email, age, func, children}) => {
const UserCard = ({person}) => {
  return (
    <div className="profile-card">
      {/* {console.log(props)} */}
      <Card
        style={{
          width: "18rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            height: "13rem",
          }}
        />
        <Col>
          <Image
            src={person.src}
            roundedCircle
            style={{
              height: "150px",
              width: "150px",
              position: "relative",
              bottom: "80px",
              border: "10px solid white",
              backgroundColor: "transparent",
            }}
          />
        </Col>
        <Card.Body style={{ position: "relative", bottom: "90px" }}>
          <Card.Title style={{ margin: "0", color: "#505151" }}>
            {person.name}
          </Card.Title>
          <Card.Text style={{ fontSize: "small", color: "#4baed4" }}>
            {person.email}
          </Card.Text>
          {/* {children} */}
        </Card.Body>
        {/* <Button variant="primary" onClick={func}>Void</Button> */}
      </Card>
    </div>
  );
};


// UserCard.defaultProps={
//     name:"Foulen",
//     email:"foulen@gmail.com",
//     age: "Your age",
//     children:<p>Attention !!!</p>
// }


// UserCard.propTypes={
//     name:propTypes.string,
//     email:propTypes.isRequired
// }

export default UserCard;
