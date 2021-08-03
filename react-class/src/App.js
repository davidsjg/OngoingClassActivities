import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';



//convert from functional based to class based, use the state object, create removeFriend method, call FriendCard one time, passing down props as diff values in that object nested inside the array.  also, we are going to pass down the removeFriend function.  pass down props and map over 


const removeFriend = (id) => {
  //when the user clicks the button, execute this function
  //we want to remove the friend that was clicked from 
  friends.splice(id, 1)
}


class FriendState extends React.Component {

  state = {
    dispFriends: 0
  }


handleIncrement = () => {
  this.setState({dispFriends: this.dispFriends + 1})
}

//take in the id of the friend we want to remove(hide)

render() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <FriendCard friends={friends} removeFriend={removeFriend}/>
    </Wrapper>

  );
}
}
export default FriendState;
