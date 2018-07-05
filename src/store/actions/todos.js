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
