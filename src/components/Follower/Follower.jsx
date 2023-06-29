import React from 'react';

const Follower = (props) => {
  return (
    <div className='follower'>
        <div className="name">
          <img src={props.img} alt="facebook" />
          <div className="username">
            {props.name}
          </div>
        </div>
        <div className="info">
          <div className="number">
            {props.follow}
          </div>
          <p>{props.people}</p>
        </div>
        <div className="today">
            <img src={props.arrow} alt="up icon" />
          <p>{props.up} Today</p>
        </div>
    </div>
  )
}

export default Follower