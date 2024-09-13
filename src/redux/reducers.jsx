import { SET_DATA } from './actions';

const initialState = {
  skills: [],
  profile: {},
  projects: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
