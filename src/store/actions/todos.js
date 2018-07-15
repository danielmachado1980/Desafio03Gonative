export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    text,
  },
});
export const delTodo = id => ({
  type: 'DELETE_TODO',
  payload: {
    id,
  },
});
export const addFavoriteRequest = repoName => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    repoName,
  },
});
export const addFavoriteSuccess = id => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: {
    id,
  },
});
