import { Text as NativeText } from "react-native";
import styles from "./styles";

export default Text = ({ text, otherStyles }) => {
  return <NativeText style={[styles.text, otherStyles]}>{text}</NativeText>;
};
