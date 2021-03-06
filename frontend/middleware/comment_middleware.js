import { CREATE_COMMENT,
         DESTROY_COMMENT,
         ADD_COMMENT,
         REMOVE_COMMENT,
         addComment,
         removeComment} from '../actions/comment_actions';
import { createComment, destroyComment, } from '../util/comment_api_util';

export default store => next => action => {
  const createSuccess = comment => {
    store.dispatch(addComment(comment));
  };
  const destroySuccess = comment => {
    store.dispatch(removeComment(comment));
  };

  switch(action.type){
    case CREATE_COMMENT:
      createComment(action.comment, createSuccess);
      return next(action);
    case DESTROY_COMMENT:
      destroyComment(action.id, destroySuccess);
      return next(action);
    default:
      return next(action);
  }
};
