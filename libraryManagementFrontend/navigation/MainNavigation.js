import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import SelectDateScreen from "../screens/SelectDateScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "../constants/AppRoutes";
import WelcomScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import AddWalletScreen from "../screens/AddWalletScreen";
import { useSelector, useDispatch } from "react-redux";
import { userAutoLoggedIn } from "../store/actions/UserActions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import AddVehicleScreen from "../screens/AddVehicleScreen";
import BookingDetailsScreen from "../screens/BookingDetailsScreen";
import ShowCarsScreen from "../screens/ShowCarsScreen";

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
            name={AppRoutes.ADDWALLET}
            component={AddWalletScreen}
          />
          <Stack.Screen
            name={AppRoutes.SHOWVEHICLE}
            component={ShowCarsScreen}
          />
          <Stack.Screen name={AppRoutes.VEHICLE} component={AddVehicleScreen} />
          <Stack.Screen name={AppRoutes.PICK} component={WelcomScreen} />
          <Stack.Screen
            name={AppRoutes.BOOKING}
            component={BookingDetailsScreen}
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
