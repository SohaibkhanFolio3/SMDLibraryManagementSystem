import { View } from "react-native";
import Text from "../Text";
import styles from "./styles";

export default ErrorText = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text text={text} otherStyles={styles.text} />
    </View>
  );
};
