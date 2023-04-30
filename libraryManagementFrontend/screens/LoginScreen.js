import { View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import StringConstants from "../constants/StringConstants";
import AppLogo from "../components/AppLogo";
import APP_ROUTES from "../constants/AppRoutes";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/UserActions";
import ErrorText from "../components/ErrorText";
import { StyleSheet } from "react-native";
import ColourConstants from "../constants/ColourConstants";
import AppRoutes from "../constants/AppRoutes";

export default LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const onPressSignup = () => {
    navigation.navigate(APP_ROUTES.SIGNUP);
  };

  const validateData = () => {
    if (email === "" || password === "") {
      setError("Fields cannot be empty");
      return false;
    }
    return true;
  };

  const onPressLogin = async () => {
    if (!validateData()) {
      return;
    }
    setError("");
    try {
      console.log("yess");
      await dispatch(login({ email, password }));
      console.log("success");
    } catch (error) {
      setError("Incorrect Email or password.");
    }
  };
  return (
    <View style={styles.container}>
      <AppLogo />

      <View style={styles.formContainer}>
        {error && <ErrorText text={error} />}
        <Input
          placeholder={StringConstants.EMAIL_PLACEHOLDER}
          value={email}
          setValue={setEmail}
        />
        <Input
          placeholder={StringConstants.PASSWORD_PLACEHOLDER}
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              text={StringConstants.LOGIN_BUTTON}
              onPress={onPressLogin}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              text={StringConstants.JOIN_NOW_BUTTON}
              onPress={onPressSignup}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: ColourConstants.BACKGROUND_COLOUR,
    paddingVertical: "20%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "2%",
  },
  buttonContainer: {
    margin: 5,
  },
  formContainer: {
    alignItems: "center",
  },
});
