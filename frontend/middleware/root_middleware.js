import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UserMiddleware from './user_middleware';
import PhotoMiddleware from './photo_middleware';
import FollowMiddleware from './follow_middleware';

const RootMiddleware = applyMiddleware (
  SessionMiddleware,
  UserMiddleware,
  PhotoMiddleware,
  FollowMiddleware
);

export default RootMiddleware;
