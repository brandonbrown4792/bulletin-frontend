import { createStore, combineReducers } from 'redux';
import loggedInReducer from './Reducers/loggedInReducer';
import messagesReducer from './Reducers/messagesReducer';
import postsReducer from './Reducers/postsReducer';
import userReducer from './Reducers/userReducer';

const rootReducer = combineReducers({
  loggedInReducer: loggedInReducer,
  messagesReducer: messagesReducer,
  postsReducer: postsReducer,
  userReducer: userReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);