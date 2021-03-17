import React from 'react';
import PostsIcon from "../../../../components/SvgIcons/PostsIcon";

const PostContainerTabs = () => {

   return (
    <div className='user-post-container__tabs'>
      <div className='user-post-container__tabs__item__wrapper'>
        <div className='user-post-container__tabs__item' data-tab='posts'>
          <PostsIcon/>
          <p>
            Posts
          </p>
        </div>
      </div>

    </div>
  );
};

export default PostContainerTabs;