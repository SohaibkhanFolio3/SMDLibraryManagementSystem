import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_KEYS } from "../../constants/GenericConstants";

export const setLoggedInUser = async (user) => {
  const userString = JSON.stringify(user);
  await AsyncStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN_USER, userString);
};

export const getLoggedInUser = async () => {
  try {
    const user = await AsyncStorage.getItem(LOCAL_STORAGE_KEYS.LOGGED_IN_USER);
    return JSON.parse(user);
  } catch (error) {
    return null;
  }
};

export const addLoggedInUserBalance = async (balance) => {
  try {
    const user = await getLoggedInUser();
    user.balance = parseFloat(user.balance);
    user.balance += parseFloat(balance);
    await setLoggedInUser(user);
  } catch (error) {
    console.log(error);
  }
};

export const subtractLoggedInUserBalance = async (balance) => {
  try {
    const user = await getLoggedInUser();
    user.balance = parseFloat(user.balance);
    user.balance -= parseFloat(balance);
    await setLoggedInUser(user);
  } catch (error) {
    console.log(error);
  }
};
