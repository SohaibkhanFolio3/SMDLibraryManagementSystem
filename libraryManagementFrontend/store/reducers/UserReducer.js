import { USER_ACTIONS } from "../../constants/ActionConstants";

const initialState = {
  loggedInUser: null,
  loading: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTIONS.SIGNUP_REQUEST:
      return { ...state, loading: true };
    case USER_ACTIONS.SIGNUP_SUCCESS:
      return { ...state, loading: false };
    case USER_ACTIONS.SIGNUP_FAILURE:
      return { ...state, loading: false };
    case USER_ACTIONS.LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_ACTIONS.LOGIN_SUCCESS:
      return { ...state, loading: false, loggedInUser: action.payload };
    case USER_ACTIONS.LOGIN_FAILURE:
      return { ...state, loading: false };
    case USER_ACTIONS.LOGOUT_REQUEST:
      return { ...state, loading: true };
    case USER_ACTIONS.LOGOUT_SUCCESS:
      return { ...state, loading: false, loggedInUser: null };
    case USER_ACTIONS.LOGOUT_FAILURE:
      return { ...state, loading: false };
    case USER_ACTIONS.ADD_BALANCE_REQUEST:
      return { ...state, loading: true };
    case USER_ACTIONS.ADD_BALANCE_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedInUser: {
          ...state.loggedInUser,
          balance:
            parseFloat(state.loggedInUser.balance) + parseFloat(action.payload),
        },
      };
    case USER_ACTIONS.ADD_BALANCE_FAILURE:
      return { ...state, loading: false };
    case USER_ACTIONS.SUBTRACT_BALANCE_REQUEST:
      return { ...state, loading: true };
    case USER_ACTIONS.SUBTRACT_BALANCE_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedInUser: {
          ...state.loggedInUser,
          balance:
            parseFloat(state.loggedInUser.balance) - parseFloat(action.payload),
        },
      };
    case USER_ACTIONS.SUBTRACT_BALANCE_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
