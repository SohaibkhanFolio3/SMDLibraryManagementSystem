import { StyleSheet } from "react-native";
import ColourConstants from "../../constants/ColourConstants";

export default styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: ColourConstants.PRIMARY_COLOUR,
    elevation: 5,
    height: "3%",
    minWidth: 50,
    minHeight: 35,
    marginBottom: 10,
    marginTop: 20,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    color: ColourConstants.TEXT_COLOUR_LIGHT,
    fontSize: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
