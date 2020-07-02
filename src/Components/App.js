import React from 'react';
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'
import Header from './Navigation/Header'
import Menu from './Navigation/Menu';
import MainContainer from '../Containers/Main Containers/MainContainer';
import SearchUsersContainer from '../Containers/SearchUser/SearchUsersContainer';

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('auth_token')) {
      this.props.setLoggedIn(true);
    } else {
      this.props.setLoggedIn(false);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className='content-container'>
          <Grid container>
            <Grid item xs={3}>
              <Menu />
            </Grid>
            <Grid item xs={6}>
              <MainContainer />
            </Grid>
            <Grid item xs={3}>
              <SearchUsersContainer />
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: (value) => dispatch({ type: 'SET_LOGGED_IN', loggedIn: value })
  }
}

export default connect(null, mapDispatchToProps)(App);
