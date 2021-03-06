export const Types = {
  ADD_REQUEST: 'markings/ADD_REQUEST',
  ADD_SUCCESS: 'markings/ADD_SUCCESS',
  ADD_FAILURE: 'markings/ADD_FAILURE',
  ADD_CANCEL: 'markings/ADD_CANCEL',
};

const initialState = {
  mapMarkings: [],
  loading: false,
  errorOnAdd: null,
};

export default function markings(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: action.payload.marking.loading,
      };
    case Types.ADD_SUCCESS:
      return {
        mapMarkings: [...state.mapMarkings, action.payload.mapMarkings],
        errorOnAdd: null,
        loading: false,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        errorOnAdd: action.payload.message,
        loading: true,
      };
    default:
      return {
        ...state,
        errorOnAdd: null,
        loading: false,
      };
  }
}

export const Creators = {
  addMarkingRequest: marking => ({
    type: Types.ADD_REQUEST,
    payload: {
      marking,
    },
  }),

  addMarkingSuccess: mapMarkings => ({
    type: Types.ADD_SUCCESS,
    payload: {
      mapMarkings,
    },
  }),

  addMarkingError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),

  cancelRequest: () => ({
    type: Types.ADD_CANCEL,
    payload: {},
  }),

};
