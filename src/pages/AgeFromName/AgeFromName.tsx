import { TextInput, View, StyleSheet, Button, Text } from "react-native";
import useAgeFromName from "./useAgeFromName";

const AgeFromName = () => {
  const { setName, name, getAge, age, AgeReveal, setAge, state } = useAgeFromName();
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Nombre"
        onChangeText={(value) => {
            setAge(0)
            setName(value)
        }}
      />
      <Button title="Buscar" onPress={() => getAge(name)} />
      <Text style={styles.text}>La edad es: {age}. Es {state}</Text>
      <AgeReveal />
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
export default AgeFromName;
