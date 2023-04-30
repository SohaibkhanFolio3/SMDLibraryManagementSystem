import { View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import StringConstants from "../constants/StringConstants";
import AppLogo from "../components/AppLogo";
import styles from "./styles";
import { APP_ROUTES } from "../constants/GenericConstants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../store/actions/UserActions";
import ErrorText from "../components/ErrorText";
import AppRoutes from "../constants/AppRoutes";

export default SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const validateData = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      mobile === ""
    ) {
      setError("Fields cannot be empty");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const onPressSignup = async () => {
    if (!validateData()) {
      return;
    }
    setError("");
    try {
      await dispatch(signup({ firstName, lastName, email, password, mobile }));
      console.log("success");
      alert("Sign up succesfull. Please Login");
      navigation.navigate(AppRoutes.LOGIN);
    } catch (error) {
      setError("");
    }
  };

  const onPressLogin = () => {
    navigation.navigate(AppRoutes.LOGIN);
  };
  return (
    <View style={styles.container}>
      <AppLogo />
      <View style={styles.formContainer}>
        {error && <ErrorText text={error} />}
        <Input
          placeholder={StringConstants.FIRST_NAME_PLACEHOLDER}
          value={firstName}
          setValue={setFirstName}
        />
        <Input
          placeholder={StringConstants.LAST_NAME_PLACEHOLDER}
          value={lastName}
          setValue={setLastName}
        />
        <Input
          placeholder={StringConstants.MOBILE_PLACEHOLDER}
          value={mobile}
          setValue={setMobile}
        />
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
        <Input
          placeholder={StringConstants.CONFIRM_PASSWORD_PLACEHOLDER}
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button
            text={StringConstants.SIGNUP_BUTTON}
            onPress={onPressSignup}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text={StringConstants.ALREADY_HAVE_ACCOUNT}
            onPress={onPressLogin}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};
