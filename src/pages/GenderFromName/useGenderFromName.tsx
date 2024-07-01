import { useCallback, useState } from "react";
import { Endpoints } from "../../services/Endpoints";
import { View } from "react-native";

const useGenderFromName = () => {
  const endpoints = new Endpoints();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const getGender = useCallback((personName: string) => {
    endpoints
      .getGenderFromName(personName)
      .then((res) => setGender(res.gender));
  }, []);

  const GenderReveal = () => {
    if (gender === "male") {
      return (
        <View
          style={{ backgroundColor: "#0000ff", width: "100%", height: 50 }}
        />
      );
    } else if (gender === "female") {
      return (
        <View
          style={{ backgroundColor: "#ff69b4", width: "100%", height: 50 }}
        />
      );
    }
    return <View />;
  };
  return {
    setName,
    name,
    getGender,
    gender,
    GenderReveal,
  };
};
export default useGenderFromName;
