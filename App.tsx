import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screens/Home';
import DevBadge from './src/Screens/DevBadge';

const Tab = createBottomTabNavigator();
const tema = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, background: '#000000'}
};

export default function App() {
  return (
    <NavigationContainer theme={tema}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#0d1117', borderTopColor: '#222222' },
          tabBarActiveTintColor: '#009de0',
          tabBarInactiveTintColor: '#8b949e',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarIconStyle: { display: 'none' },
        }}>
          <Tab.Screen name="Senhas" component={Home}/>
          <Tab.Screen name="DevBadge" component={DevBadge}/>
      </Tab.Navigator>

    </NavigationContainer>
  );
}

