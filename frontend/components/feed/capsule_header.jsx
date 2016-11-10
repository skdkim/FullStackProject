import React from 'react';

const CapsuleHeader = (props) => (
  <header className="feed-photo-header">
    <a className="feed-photo-user-icon" href={`#/profile/${props.user.id}`}>
      <img className="feed-photo-user-icon-image" src={`${props.user.image_url}`}/>
    </a>
    <h1 className="feed-sbt">{props.user.username}</h1>
  </header>
);

export default CapsuleHeader;