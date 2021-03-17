import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import userSelector from "../../../../store/selectors/userSelector";
import userProfileSelector from "../../../../store/selectors/userProfileSelector";
import LikeIcon from "../../../../components/SvgIcons/LikeIcon";
import CommentIcon from "../../../../components/SvgIcons/CommentIcon";
import PostModal from "../../../../components/PostModal/PostModal";
import { createProfilePost } from "../../../../store/actions/profileActions";

const PostContainerContent = ({ currentTab }) => {

  const dispatch = useDispatch()
  const user = useSelector(userSelector);
  const { username, posts = [], saved_posts = [] } = useSelector(userProfileSelector);
  const [postModal, setPostModal] = useState(null);
  const isMe = user.username === username;

  const onFileUpload = ({ files }) => {
    const [file] = files
    file && dispatch(createProfilePost(user._id, file))
  }

  const renderNoPostsMessage = () => {
    return (
      <div className='user-post-container__text'>
        {
          isMe
            ? <>
              <p>You have not any post yet</p>
              <p>Click button to create first post</p>
            </>
            : <p>User have not any post</p>
        }
      </div>
    )
  };

  const renderPosts = (posts) => posts.map((post, index) => {
    const { likes, comments, url } = post
    return (
      <div key={ index }>
        { postModal && <PostModal post={ postModal } onClose={ () => setPostModal(null) }/> }
        <div className='user-post-container__content__item' onClick={ () => setPostModal(post) }>
          <div className='user-post-container__content__item__overlay'>
          <span>
            <LikeIcon/>
            { likes ? likes.length : 0 }
          </span>
            <span>
            <CommentIcon/>
              { comments ? comments.length : 0 }
          </span>
          </div>
          <img src={ url } alt="#"/>
        </div>
      </div>
    )
  });

  return (
    <>
      {
        currentTab === 'posts'
          ? <>
            <div className='user-post-container__text'>
              { posts.length === 0 && renderNoPostsMessage() }
              {
                isMe && <label>
                  Create post
                  <input type='file' onChange={ (event) => onFileUpload(event.target) }/>
                </label>
              }
            </div>
            <div className='user-post-container__content'>
              { renderPosts(posts) }
            </div>
          </>
          : <>
            {
              saved_posts.length > 0
                ? <div className='user-post-container__content'>
                  { renderPosts(saved_posts) }
                </div>
                : <div className='user-post-container__text'>
                  <p>No saved posts</p>
                </div>
            }
          </>
      }
    </>
  );
};

export default PostContainerContent;