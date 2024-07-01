import { View, Text } from "react-native";
import useWeather from "./useWeather";

const Weather = () => {
    const {
        WeatherResult,
    } = useWeather()
    return (
        <View>
           <WeatherResult />
        </View>
    )
}


export default Weather;