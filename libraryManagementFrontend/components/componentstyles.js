import { StyleSheet } from "react-native";
import ColourConstants from "../constants/ColourConstants";

export default styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: ColourConstants.BACKGROUND_COLOUR,
  },
  mainTextBox: {
    color: ColourConstants.TEXT_COLOUR_LIGHT,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: ColourConstants.PRIMARY_COLOUR,
    justifyContent: "center",
    margin: "15%",
    flex: 0.25,
    width: "70%",
    alignItems: "center",
  },
  bottomBorder: {
    borderBottomWidth: 1,
  },
  mainText: {
    fontSize: 25,
    color: ColourConstants.TEXT_COLOUR_LIGHT,
    alignContent: "center",
    padding: 25,
  },
  parkingArea: {
    flex: 0.75,
    backgroundColor: ColourConstants.BACKGROUND_COLOUR,
  },
  parkingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "5%",
  },
  parkingBoxSquare: {
    height: 250,
    width: 150,
    borderWidth: 1,
    backgroundColor: ColourConstants.PRIMARY_COLOUR,
    justifyContent: "center",
    alignItems: "center",
  },
  parkingBox: {
    borderWidth: 1,
    borderRadius: 100,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  parkingBoxContent: {
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
  dateBox: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flex: 0.6,
  },
  dateText: {
    margin: "5%",
    borderWidth: 1,
    padding: "2%",
    backgroundColor: ColourConstants.PRIMARY_COLOUR,
    borderRadius: 5,
  },
  dateBoxText: {
    color: ColourConstants.TEXT_COLOUR_LIGHT,
    fontSize: 13,
    padding: 10,
  },
  mainTextBoxBilling: {
    color: ColourConstants.TEXT_COLOUR_LIGHT,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: ColourConstants.PRIMARY_COLOUR,
    justifyContent: "center",
    margin: "5%",
    marginLeft: "12%",
    marginBottom: "15%",
    flex: 0.4,
    width: "70%",
    alignItems: "center",
  },
});
