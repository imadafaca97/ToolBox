import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Portada from './Portada/Portada';
import GenderFromName from './GenderFromName/GenderFromName';
import AgeFromName from './AgeFromName/AgeFromName';
import UniversitiesFromCountry from './UniversitiesFromCountry/UniversitiesFromCountry';
import Weather from './Weather/Weather';
import AboutMe from './AboutMe/AboutMe';


const Main = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Portada">
        <Drawer.Screen name="Portada" component={Portada} />
        <Drawer.Screen name="Adivinar Genero" component={GenderFromName} />
        <Drawer.Screen name="Adivinar Edad" component={AgeFromName} />
        <Drawer.Screen name="Universidades" component={UniversitiesFromCountry} />
        <Drawer.Screen name="Clima en RD" component={Weather} />
        <Drawer.Screen name="Sobre mi" component={AboutMe} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Main;