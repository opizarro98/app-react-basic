import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <NavigationContainer>
      <BottomTabNavigator tasks={tasks} addTask={addTask} />
    </NavigationContainer>
  );
}
