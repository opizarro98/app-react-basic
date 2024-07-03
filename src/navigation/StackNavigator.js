import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddTaskScreen from '../screens/AddTaskScreen';
import ViewTasksScreen from '../screens/ViewTasksScreen';

const Stack = createStackNavigator();

function StackNavigator({ tasks, addTask }) {
  return (
    <Stack.Navigator initialRouteName="AddTask">
      <Stack.Screen name="AddTask">
        {(props) => <AddTaskScreen {...props} addTask={addTask} />}
      </Stack.Screen>
      <Stack.Screen name="ViewTasks">
        {(props) => <ViewTasksScreen {...props} tasks={tasks} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;
