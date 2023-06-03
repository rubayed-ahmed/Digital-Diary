import { LOAD_BLOG } from "../actionTypes/actionTypes";

export const initalState = {
  blog: [],
};

const blogReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_BLOG:
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
