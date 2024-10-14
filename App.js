//Author: Laura Savolainen, TIK23KM
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //Importataan bottom navigointi
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importataan ikonit
import AddWorkoutScreen from './components/AddWorkoutScreen'; //Harjoitusten lisäys näkymä
import WorkoutHistoryScreen from './components/WorkoutHistoryScreen'; //Harjoitushistoria näkymä
import SettingsScreen from './components/SettingsScreen'; //Asetukset
import { WorkoutsProvider } from './context/WorkoutsContext'; //context

const Tab = createBottomTabNavigator();

// navigointi & ikonit
export default function App() {  
  return (
    <WorkoutsProvider>
      <NavigationContainer>    
        <Tab.Navigator
          initialRouteName="AddWorkout"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => { 
              let iconName;

              if (route.name === 'Add Workout') {
                iconName = 'add-circle-outline'; // Ikoni lisää harjoitus-painikkeelle
              } else if (route.name === 'Workout History') {
                iconName = 'history'; // Ikoni harjoitushistoria -painikkeelle
              } else if (route.name === 'Settings') {
                iconName = 'settings'; // Ikoni asetukset -painikkeelle
              }

              // Ikoni komponentti, painettu painike mustalla, muut harmaalla
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'black',  
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
              backgroundColor: '#9f398c96', // Header väri
            },
            headerTintColor: '#fff', // Header otsikon väri
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        > 
          <Tab.Screen
            name="Add Workout"
            component={AddWorkoutScreen}
            options={{ title: 'Add Workout' }} 
          />
          <Tab.Screen
            name="Workout History"
            component={WorkoutHistoryScreen}
            options={{ title: 'Workout History' }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: 'Settings' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutsProvider>
  );
}
