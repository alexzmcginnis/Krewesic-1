import React, {useEffect, useState, useContext} from 'react';
import GlobalContext from '../Contexts/GlobalContext.jsx';
import {Button} from '@material-ui/core';
import styled from 'styled-components';

const StyledMyChats = styled.div`
    .chatButton {
    background-color: ${props => props.theme.colorMed};
  }
`;

const MyChats = ({userId, allMyChats, goToChat, notifyOtherUser}) => {
  //get the chats that include the creator and includes the user
  const {id} = useContext(GlobalContext);
  //console.log('userid', userId, 'g2c', goToChat);
  const [myChats, setMyChats] = useState([]);




  useEffect(() => {
    //console.log('my Id:', id, 'other Id', userId);
    //console.log('allMyChats', allMyChats);
    const intersectionChats = allMyChats.filter(chat => chat.attendees.includes(userId.toString()));
    //console.log('intersection of chats', intersectionChats);
    setMyChats(intersectionChats);

  }, [allMyChats]);

  return (
    <StyledMyChats>
      {myChats.map((chat, i) => <Button className='chatButton' onClick={() =>{ 
        notifyOtherUser(userId);
        goToChat(chat);
      }} key={i}>Chat!</Button>)}

      
    </StyledMyChats>
  );
};

export default MyChats;
