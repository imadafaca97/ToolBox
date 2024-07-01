import { useCallback, useEffect, useState } from "react";
import { Endpoints } from "../../services/Endpoints";
import { Text, View, StyleSheet } from "react-native";

const useWeather = () => {
    const endpoints = new Endpoints();
    
    const [weather, setWeather] = useState<any>()

    const getRDWeather = useCallback(() => {
        endpoints
          .getMeteoSource()
          .then((res: any) => setWeather(res));
      }, []);

      useEffect(() => {
        getRDWeather()
      }, [])

      const WeatherResult = () => {
        if(weather) {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Temperatura: <Text style={styles.text}>{weather.current.temperature}</Text></Text>
                    <Text style={styles.title}>Nivel de nublado: <Text style={styles.text}>{weather.current.cloud_cover}</Text></Text>
                    <Text style={styles.title}>Velocidad del viento: <Text style={styles.text}>{weather.current.wind.speed}</Text></Text>
                    <Text style={styles.title}>Angulo del viento: <Text style={styles.text}>{weather.current.wind.angle}</Text></Text>
                    <Text style={styles.title}>Direccion del viento: <Text style={styles.text}>{weather.current.wind.dir}</Text></Text>
                    <Text style={styles.title}>Estado del cielo: <Text style={styles.text}>{weather.current.summary}</Text></Text>
                </View>
            )
        }
        return (<View />)
      }
      return {
        getRDWeather,
        weather,
        setWeather,
        WeatherResult,
      }
}

const styles = StyleSheet.create({
    container: {
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
  });
export default useWeather;