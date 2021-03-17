import React from 'react';
import OptionsIcon from "../../SvgIcons/OptionsIcon";
import './PostModalHeader.scss'

const PostModalHeader = ({ postAuthor }) => {
  return (
    <div className="post-modal__header">
      <div className='post-modal__header__author'>
        <div className='post-modal__header__author-img'>
          <img src={ postAuthor.img || '/no_user_photo.png' } alt={ postAuthor.username }/>
        </div>
        <div>
          <p>{ postAuthor.username }</p>
        </div>
      </div>
      <OptionsIcon/>
    </div>
  );
};

export default PostModalHeader;