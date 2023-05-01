import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import SelectDateScreen from "../screens/SelectDateScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "../constants/AppRoutes";
import WelcomScreen from "../screens/ShowBooksScreen";
import HomeScreen from "../screens/HomeScreen";
import AddBookScreen from "../screens/AddBookScreen";
import { useSelector, useDispatch } from "react-redux";
import { userAutoLoggedIn } from "../store/actions/UserActions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import ManageBookScreen from "../screens/ManageBookScreen";
import ManageBooksScreen from "../screens/ManageBooksScreen";
import ShowIssuedBooks from "../screens/ShowIssuedBooks";

const Stack = createNativeStackNavigator();
export default function MainNavigation() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkUser() {
      try {
        await dispatch(userAutoLoggedIn());
      } catch (error) {
        console.log(error);
      }
    }
    checkUser();
  }, []);
  return (
    <NavigationContainer>
      {loggedInUser ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen name={AppRoutes.HOME} component={HomeScreen} />
          <Stack.Screen
            name={AppRoutes.DATETIME}
            component={SelectDateScreen}
          />
          <Stack.Screen
            name={AppRoutes.MANAGEBOOKS}
            component={ManageBooksScreen}
          />
          <Stack.Screen name={AppRoutes.ADDCOPY} component={AddBookScreen} />
          <Stack.Screen
            name={AppRoutes.SHOWVEHICLE}
            component={ShowIssuedBooks}
          />
          <Stack.Screen name={AppRoutes.ADDBOOK} component={ManageBookScreen} />
          <Stack.Screen name={AppRoutes.PICK} component={WelcomScreen} />
          <Stack.Screen
            name={AppRoutes.BOOKING}
            component={ManageBooksScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={AppRoutes.LOGIN} component={LoginScreen} />
          <Stack.Screen name={AppRoutes.SIGNUP} component={SignupScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
