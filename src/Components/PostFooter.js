import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from '@material-ui/core';
import { ThumbUpOutlined, ChatOutlined } from '@material-ui/icons';

const likePost = (props) => {
  const token = localStorage.getItem('auth_token');

  if (!token) {
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
    .catch(() => alert('Something went wrong'))
}

const PostFooter = (props) => {
  return (
    <div className='post-footer'>
      <Button className='post-footer-button' onClick={() => likePost(props)}>
        <Icon>
          <ThumbUpOutlined />
        </Icon>
      </Button>
      <span>{props.post.likes_count}</span>
      <Button className='post-footer-button'>
        <Icon>
          <ChatOutlined />
        </Icon>
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (post) => dispatch({ type: 'UPDATE_POSTS', post: post })
  }
}

export default connect(null, mapDispatchToProps)(PostFooter);