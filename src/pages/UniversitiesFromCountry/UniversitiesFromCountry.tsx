import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  VirtualizedList,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
} from "react-native";
import useUniversitiesFromCountry from "./useUniversitiesFromCountry";

const UniversitiesFromCountry = () => {
  const { country, setCountry, getUniversitiesFromCountry, universities } =
    useUniversitiesFromCountry();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Pais"
        onChangeText={setCountry}
      />
      <Button
        title="Buscar"
        onPress={() => {
          getUniversitiesFromCountry(country);
          Keyboard.dismiss;
        }}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FlatList
          data={universities}
          renderItem={({ item }) => (
            <View style={styles.items}>
              <Text style={styles.title}>
                Universidad: <Text style={styles.text}>{item.name}</Text>
              </Text>
              <Text style={styles.title}>
                Dominio:{" "}
                <Text
                  style={styles.text}
                >
                  {item.domains[0] ? item.domains[0] : "No tiene"}
                </Text>
              </Text>
              <Text style={styles.title}>
                Pagina web:{" "}
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(item.web_pages[0] ? item.web_pages[0] : "")
                  }
                >
                  {" "}
                  {item.web_pages[0] ? item.web_pages[0] : "No tiene"}
                </Text>
              </Text>

              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: "black",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  items: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  link: {
    color: "blue",
    fontWeight: "400",
  },
});
export default UniversitiesFromCountry;
