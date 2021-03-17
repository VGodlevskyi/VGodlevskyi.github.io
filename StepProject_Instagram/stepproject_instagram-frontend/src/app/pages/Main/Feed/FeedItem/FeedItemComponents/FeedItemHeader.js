import React from 'react';
import OptionsIcon from "../../../../../components/SvgIcons/OptionsIcon";
import { NavLink } from "react-router-dom";

const FeedItemHeader = (props) => {

  const { _id, img, username } = props.author

  return (
    <div className='post-item__header'>
      <NavLink className='post-item__header__link' to={`/user/${_id}`}>
        <div className='post-item__header__image'>
          <img src={img || '/no_user_photo.png'} alt={username} />
        </div>
        <div className='post-item__header__username'>
          <p>{username}</p>
        </div>
      </NavLink>
      <div className='post-item__header__options'>
        <OptionsIcon />
      </div>
    </div>
  );
};

export default FeedItemHeader;