import React from 'react';
import ReactDOM from 'react-dom';
import { Comment, CommentProps } from './Comment'
import user1Avatar from './image/a.png'
import user2Avatar from './image/g.png'
// CommentProps props are: name, time, text, avatar
const user1Comment = new CommentProps("Sarah", "Today 15:00", "nice!", user1Avatar);
const user2Comment = new CommentProps("Eli", "Today 15:11", "yep its prerty good", user2Avatar);
const user1Comment2 = new CommentProps("Sarah", "Today 15:15", "lol", user1Avatar);


const App = () => {

  return (
    <div>
      <div className='ui comments'>
        <Comment comment={user1Comment} />
        <Comment comment={user2Comment} />
        <Comment comment={user1Comment2} />
      </div>
    </div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
);
