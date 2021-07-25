import React from 'react';


const UserCard = (props) => {
  return (

    <div className='ui card'>
      <div className='content'>

        <div className='header'>

          <div className='description'>

            {/*  this is the Comment object to show*/}
            {props.children}
          </div>
        </div>

      </div>

      <div className='ui buttom button'>

        <i className='add icon'></i>
        Add friend

      </div>

    </div>

  )
}

export default UserCard;