import React from "react";
import "./style.css";

function FriendCard(props) {
  console.log(props)
  console.log(props.friends)
  return (

    props.friends.map(friend => (
      <div key={friend.id} className="card">
      <div className="img-container">
        <img alt={friend.name} src={friend.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {friend.name}
          </li>
          <li>
            <strong>Occupation:</strong> {friend.occupation}
          </li>
          <li>
            <strong>Address:</strong> {friend.location}
          </li>
        </ul>
      </div>

      <span className="remove" onClick={props.removeFriend}>𝘅</span>
    </div>
    ))






  );
}

export default FriendCard;
