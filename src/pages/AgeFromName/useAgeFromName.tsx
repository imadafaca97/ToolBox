import { useCallback, useState } from "react";
import { Endpoints } from "../../services/Endpoints";
import { Image, View } from "react-native";

const useAgeFromName = () => {
  const endpoints = new Endpoints();
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [age, setAge] = useState(0);

  const getAge = useCallback((personName: string) => {
    endpoints.getAgeFromName(personName).then((res) => setAge(res.age));
  }, []);

  const AgeReveal = () => {
    if (age <= 30 && age > 0) {
      setState('Joven')
      return (
        <Image
        source={require("../../../assets/joven.png")}
        style={{ width: "100%", height: 620 }}
        />
      );
    } else if (age <= 80 && age > 0) {
      setState('Adulto')
      return (
        <Image
        source={require("../../../assets/adulto.png")}
        style={{ width: "90%", height: 520, resizeMode: 'stretch' }}
        />
      );
    } else if (age > 80) {
      setState('Anciano')
      return (
        <Image
          source={require("../../../assets/anciano.png")}
          style={{ width: "90%", height: 520, resizeMode: 'stretch' }}
        />
      );
    }
    return <View />;
  };
  return {
    setName,
    name,
    getAge,
    age,
    AgeReveal,
    setAge,
    state,
  };
};
export default useAgeFromName;
