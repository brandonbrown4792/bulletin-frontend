import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomeContainer from './HomeContainer';
import TagsContainer from './TagsContainer';
import MessagesContainer from './MessagesContainer';
import NotificationsContainer from './NotificationsContainer';
import UserPageRedirect from '../Components/UserPageRedirect';
import UserPageContainer from './UserPageContainer';
import LoginForm from '../Components/LoginForm'

const MainContainer = (props) => {
  return (
    <div className='main-container'>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route exact path='/home' component={HomeContainer} />
        <Route exact path='/tags' component={TagsContainer} />
        <Route exact path='/messages' component={MessagesContainer} />
        <Route exact path='/notifications' component={NotificationsContainer} />
        <Route exact path='/profile' component={UserPageRedirect} />
        <Route exact path='/profile/:username' component={UserPageContainer} />
        <Route exact path='/login' component={LoginForm} />
      </Switch>
    </div>
  )
}

export default MainContainer;