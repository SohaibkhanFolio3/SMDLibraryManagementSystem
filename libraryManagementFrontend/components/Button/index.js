import { Pressable } from "react-native";
import Text from "../Text";
import styles from "./styles";

export default Button = ({ text, onPress, width }) => {
  const otherStyles = {
    width,
  };
  return (
    <Pressable style={[styles.button, otherStyles]} onPress={onPress}>
      <Text text={text} otherStyles={styles.textStyle} />
    </Pressable>
  );
};
