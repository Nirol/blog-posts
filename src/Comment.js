import React from 'react';



class CommentProps {
  constructor(name, time, text, avatar) {
    this.name = name;
    this.time = time;
    this.text = text;
    this.avatar = avatar;
  }
}






const Comment = (props) => {

  return (

    <div className='comment'>

      <a href="/" className='avatar'>

        <img src={props.comment.avatar} style={{ height: '50px', width: '50px', }} alt="profile" />
      </a>
      <div className='content'>
        <a href="/" className='author'>

          {props.comment.name}
        </a>

        <div className='metadata'>
          <span className='date'>
            {props.comment.time}
          </span>

        </div>
        <div className='text'>
          {props.comment.text}
        </div>

      </div>

    </div>

  )
}

export { Comment, CommentProps };