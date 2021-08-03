import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';



//convert from functional based to class based, use the state object, create removeFriend method, call FriendCard one time, passing down props as diff values in that object nested inside the array.  also, we are going to pass down the removeFriend function.  pass down props and map over 

export default class FriendState extends React.Component {
  state = {
    friends
  }

removeFriend = (id) => {
  const friends = this.state.friends.filter((friend) => friend.id !== id)
  this.setState({friends})
}

render() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {this.state.friends.map((friend) => (
        <FriendCard
        id={friend.id}
        key={friend.id}
        name={friend.name}
        image={friend.image}
        occupation = {friend.occupation}
        location= {friend.location}
        removeFriend={this.removeFriend}
        />
      ))}
    </Wrapper>

  );
}
}