import { USER_ACTIONS } from "../../constants/ActionConstants";
import StringConstants from "../../constants/StringConstants";
import { actionWrapper } from "..";
import {
  setLoggedInUser,
  getLoggedInUser,
  addLoggedInUserBalance,
  subtractLoggedInUserBalance,
} from "../../services/StorageService/UserStorage";
import User from "../../api/User";

export const signup = (user) => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(USER_ACTIONS.SIGNUP_REQUEST));
      await User.signup(
        user.firstName,
        user.lastName,
        user.email,
        user.password,
        user.mobile
      );
      dispatch(actionWrapper(USER_ACTIONS.SIGNUP_SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(USER_ACTIONS.SIGNUP_FAILURE));
      throw error;
    }
  };
};

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(USER_ACTIONS.LOGIN_REQUEST));
      let user = await User.login(credentials.email, credentials.password);
      setLoggedInUser(user);
      dispatch(actionWrapper(USER_ACTIONS.LOGIN_SUCCESS, user));
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(USER_ACTIONS.LOGIN_FAILURE, error));
      throw error;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(USER_ACTIONS.LOGOUT_REQUEST));
      await setLoggedInUser(null);
      dispatch(actionWrapper(USER_ACTIONS.LOGOUT_SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(USER_ACTIONS.LOGOUT_FAILURE, error));
      throw error;
    }
  };
};

export const userAutoLoggedIn = () => {
  return async (dispatch) => {
    const user = await getLoggedInUser();
    if (user === null) {
      dispatch(actionWrapper(USER_ACTIONS.LOGIN_FAILURE));
    } else {
      dispatch(actionWrapper(USER_ACTIONS.LOGIN_SUCCESS, user));
    }
  };
};

export const addBalance = (balance, auth_token) => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(USER_ACTIONS.ADD_BALANCE_REQUEST));
      await User.addBalance(balance, auth_token);
      await addLoggedInUserBalance(balance);
      dispatch(actionWrapper(USER_ACTIONS.ADD_BALANCE_SUCCESS, balance));
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(USER_ACTIONS.ADD_BALANCE_FAILURE));
      throw error;
    }
  };
};

export const subtractBalance = (balance) => {
  return async (dispatch) => {
    try {
      dispatch(actionWrapper(USER_ACTIONS.SUBTRACT_BALANCE_REQUEST));
      await subtractLoggedInUserBalance(balance);
      dispatch(actionWrapper(USER_ACTIONS.SUBTRACT_BALANCE_SUCCESS, balance));
    } catch (error) {
      console.log(error);
      dispatch(actionWrapper(USER_ACTIONS.SUBTRACT_BALANCE_FAILURE));
      throw error;
    }
  };
};
