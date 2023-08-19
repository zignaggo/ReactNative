import Home from './src/screens/Home';
import NextDays from './src/screens/NextDays'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NextDays" component={NextDays} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
