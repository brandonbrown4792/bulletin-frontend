export default (state = {
  posts: []
}, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.posts
      };
    default:
      return state;
  }
}