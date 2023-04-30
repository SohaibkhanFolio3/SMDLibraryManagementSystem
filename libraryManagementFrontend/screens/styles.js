import { StyleSheet } from "react-native";
import ColourConstants from "../constants/ColourConstants";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColourConstants.BACKGROUND_COLOUR,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "30%",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: ColourConstants.SECONDARY_COLOUR,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: ColourConstants.PRIMARY_COLOUR,
  },
  upperText: {
    fontSize: 25,
    color: ColourConstants.TEXT_COLOUR_LIGHT,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: ColourConstants.PRIMARY_COLOUR,
    alignContent: "center",
    padding: 25,
  },
  textBox: {
    height: "30%",
    width: "90%",
  },
  loginbuttonText: {
    color: ColourConstants.TEXT_COLOUR_LIGHT,
  },
  addamountInput: {
    backgroundColor: ColourConstants.SECONDARY_COLOUR,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginTop: "15%",
  },
  balanceText: {
    paddingTop: "10%",
    fontSize: 15,
  },
  orText: {
    paddingTop: "10%",
    fontSize: "10",
  },
});
