export default (state = {
  posts: []
}, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.posts
      };
    case 'CREATE_NEW_POST':
      const newPosts = [...state.posts]
      newPosts.unshift(action.post)
      return {
        ...state,
        posts: newPosts
      }
    case 'UPDATE_POSTS':
      const updatePosts = [...state.posts]
      if (action.post.is_news_story) {
        return {
          ...state,
          posts: updatePosts.map(post => {
            if (action.post.content === post.content && action.post.title === post.title) {
              return action.post;
            } else {
              return post;
            }
          })
        }
      } else {
        return {
          ...state,
          posts: updatePosts.map(post => {
            if (post.id === action.post.id) {
              return action.post;
            } else {
              return post;
            }
          })
        }
      }
    default:
      return state;
  }
}