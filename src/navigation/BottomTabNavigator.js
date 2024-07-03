import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTaskScreen from '../screens/AddTaskScreen';
import ViewTasksScreen from '../screens/ViewTasksScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator({ tasks, addTask }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Nueva Tarea" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" size={size} color={color} />
          ),
        }}>
        {(props) => <AddTaskScreen {...props} addTask={addTask} />}
      </Tab.Screen>
      
      <Tab.Screen name="LIsta de Tareas"  options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}>
        {(props) => <ViewTasksScreen {...props} tasks={tasks} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
