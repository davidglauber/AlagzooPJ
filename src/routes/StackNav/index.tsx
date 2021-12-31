import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/homeScreen';
import TabNav from '../TabNav';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}