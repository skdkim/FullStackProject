import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from "./app";
import AuthContainer from './auth/auth_container';
import FeedContainer from './feed/feed_container';
import LandingContainer from './landing/landing_container';
import ProfileContainer from './profile/profile_container';
import DiscoverContainer from './discover/discover_container';

import { fetchUserDetail } from '../actions/user_actions';
import { requestAllPhotos } from '../actions/photo_actions';
import { requestAllFollows } from '../actions/follow_actions';

const Root = (props) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = props.store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = props.store.getState().session.currentUser;
    if(!currentUser){
      replace('/auth');
    }
  };

  const fetchUserInfo = (nextState) => {
    if (nextState.params.id){
      props.store.dispatch(fetchUserDetail(nextState.params.id));

    } else {
      const currentUser = props.store.getState().session.currentUser;
      props.store.dispatch(fetchUserDetail(currentUser.id));
    }
  };

  const fetchAllPhotos = () => {
    const photos = props.store.getState().photos;
    props.store.dispatch(requestAllPhotos());
  };

  const fetchAllFollows = () => {
    const follows = props.store.getState().follows;
    props.store.dispatch(requestAllFollows());
  };

  const feedGateKeeper = () => {
    _ensureLoggedIn();
    fetchAllFollows();
  };

  const profileGateKeeper = (nextState) => {
    _ensureLoggedIn();
    fetchUserInfo(nextState);
  };

  return (
    <Provider store={props.store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={FeedContainer} onEnter={fetchUserInfo}/>
          <Route path="/profile" component={ProfileContainer} onEnter={fetchUserInfo}/>
          <Route path="/profile/:id" component={ProfileContainer} onEnter={profileGateKeeper}/>

          <Route path="/landing" component={LandingContainer} />
          <Route path="/discover" component={DiscoverContainer} onEnter={fetchAllPhotos}/>
          <Route path="/auth" component={AuthContainer} onEnter={_redirectIfLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
