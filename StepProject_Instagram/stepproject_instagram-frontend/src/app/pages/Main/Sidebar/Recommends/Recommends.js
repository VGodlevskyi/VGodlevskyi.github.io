import React from 'react';
import { Link } from "react-router-dom";

const Recommends = ({ title, users = [], action, actionName }) => {

  const usersComponents = users.map((user, index) => {

    const { _id, img, username, name } = user

    return (
      <li className="sidebar__recommends__item" key={index}>
        <Link to={`/user/${_id}`}>
          <div className='sidebar__recommends__item__photo'>
            <img src={img || '/no_user_photo.png'} alt={name} />
          </div>
        </Link>
        <div className='sidebar__recommends__item__info'>
          <Link className='sidebar__recommends__item__info--username' to={`/user/${_id}`}>
            {username}
          </Link>
          <p className='sidebar__recommends__item__info--name'>
            {name}
          </p>
        </div>
        <button className="sidebar__recommends__item__subscribe" onClick={() => action(user)}>{actionName}</button>
      </li>
    )
  });

  return (
    <div className='sidebar__recommends'>
      <p className='sidebar__recommends__header'>
        {title}
      </p>
      <ul className='sidebar__recommends__container'>
        {usersComponents}
      </ul>
    </div>
  );
};

export default Recommends;