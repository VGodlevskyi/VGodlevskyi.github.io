import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import userSelector from "../../../../store/selectors/userSelector";

const Profile = () => {

  const { _id, img, username, name } = useSelector(userSelector)

  return (
    <div className='sidebar__profile'>
      <Link to={`/user/${_id}`}>
        <div className='sidebar__profile__photo'>
          <img src={img || '/no_user_photo.png'} alt={username} />
        </div>
      </Link>
      <div className='sidebar__profile__info'>
        <Link to={`/user/${_id}`}>
          <p className='sidebar__profile__info--username'>
            {username}
          </p>
        </Link>
        <p className='sidebar__profile__info--name'>
          {name}
        </p>
      </div>
    </div>
  );
};

export default Profile;