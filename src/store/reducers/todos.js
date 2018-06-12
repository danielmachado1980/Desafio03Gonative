const initialState = [
  { id: 0, text: 'Fazer algo' },
  { id: 1, text: 'Estudar de novo' },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
