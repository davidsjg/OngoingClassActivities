import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';


//convert from functional based to class based, use the state object, create removeFriend method, call FriendCard one time, passing down props as diff values in that object nested inside the array.  also, we are going to pass down the removeFriend function.  pass down props and map over 

class FriendState extends React.Component {

  state = {
    dispFriends: 0
  }
}

handleIncrement = () => {
  this.setState({dispFriends: this.dispFriends + 1})
}

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <FriendCard
        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location}
      />
      <FriendCard
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location}
      />
      <FriendCard
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}
      />
    </Wrapper>
  );
}

export default App;
