import { TextInput, View, StyleSheet, Button, Text } from "react-native";
import useGenderFromName from "./useGenderFromName";

const GenderFromName = () => {
  const { setName, name, getGender, GenderReveal } = useGenderFromName();
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Nombre"
        onChangeText={(value) => setName(value)}
      />
      <Button title="Buscar" onPress={() => getGender(name)} />
      <Text style={styles.text}>El genero es: </Text>
      <GenderReveal />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 36,
  },
  genderView: {
    width: "100%",
    height: 50,
  },
});
export default GenderFromName;
