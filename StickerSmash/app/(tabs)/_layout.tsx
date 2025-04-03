import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs 
        screenOptions={{ 
            tabBarActiveTintColor: '#ffd33d' ,
            headerStyle: { backgroundColor: '#25292e' },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: { backgroundColor: '#25292e' },
        }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
            title: 'Inicio', 
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={ focused ? 'home-sharp' : 'home-outline' } color={ color } size={ 24 } />
            ), 
        }} 
        />
      <Tabs.Screen 
        name="productos" 
        options={{ 
            title: 'Productos', 
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={ focused ? 'bag-handle' : 'bag-handle-outline' } color={ color } size={ 24 } />
            ),
        }}
        />
    </Tabs>
  );
}
