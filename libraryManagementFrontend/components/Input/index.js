import { TextInput } from "react-native";
import styles from "./styles";

export default Input = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  numeric = false,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.container}
      secureTextEntry={secureTextEntry}
      keyboardType={numeric ? "numeric" : "default"}
    />
  );
};
