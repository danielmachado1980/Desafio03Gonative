const initialState = [
  { id: 0, text: 'Fazer algo', repoId: 0 },
  { id: 1, text: 'Estudar de novo', repoId: 0 },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    case 'ADD_FAVORITE_SUCCESS':
      return [...state, { id: Math.random(), repoId: action.payload.id }];
    default:
      return state;
  }
}
