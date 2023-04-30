import { View } from "react-native";
import StringConstants from "../../constants/StringConstants";
import Text from "../Text";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import ColourConstants from "../../constants/ColourConstants";
import { Ionicons } from "@expo/vector-icons";

export default AppLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Ionicons
          name="library"
          size={100}
          color={ColourConstants.PRIMARY_COLOUR}
        />
      </View>
      <View style={styles.textContainer}>
        <Text text={StringConstants.APP_NAME} otherStyles={styles.text} />
      </View>
    </View>
  );
};
