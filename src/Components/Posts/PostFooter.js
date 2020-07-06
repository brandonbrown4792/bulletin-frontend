import React, { useState } from 'react';
import CommentsContainer from '../../Containers/Comments/CommentsContainer';
import { Button, Icon } from '@material-ui/core';
import { ThumbUpOutlined, ChatOutlined, ShareOutlined } from '@material-ui/icons';
import SharePostModal from './SharePostModal';

const likePost = (props) => {
  const token = localStorage.getItem('auth_token');

  if (!token) {
    alert('Must be logged in to like post');
    return;
  }

  const postObj = {
    post: props.post
  }

  const fetchObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Auth-Token': token
    },
    body: JSON.stringify(postObj)
  }

  fetch('http://localhost:3000/api/v1/likes', fetchObj)
    .then(res => res.json())
    .then(postResponse => {
      if (postResponse.message) {
        alert(postResponse.message);
      } else {
        props.updatePosts(postResponse)
      }
    })
    .catch((error) => alert('Something went wrong ' + error))
}

const PostFooter = (props) => {
  const [commentDrawerOpen, setCommentDrawer] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className='post-footer'>
      <Button className='post-footer-button' style={{ color: '#8798A5' }} onClick={() => likePost(props)}>
        <Icon>
          <ThumbUpOutlined />
        </Icon>
      </Button>
      <span>{props.post.likes_count}</span>
      <Button className='post-footer-button' style={{ color: '#8798A5' }} onClick={() => setCommentDrawer(!commentDrawerOpen)}>
        <Icon>
          <ChatOutlined />
        </Icon>
      </Button>
      <span>{props.post.comments.length}</span>
      <Button className='post-footer-button' style={{ color: '#8798A5', float: 'right' }} onClick={() => setModalOpen(true)}>
        <Icon>
          <ShareOutlined />
        </Icon>
      </Button>
      {commentDrawerOpen && <CommentsContainer post={props.post} updatePosts={props.updatePosts} />}
      {modalOpen && <SharePostModal open={modalOpen} handleClose={() => setModalOpen(false)} post={props.post} updatePosts={props.updatePosts} />}
    </div>
  );
}

export default PostFooter;