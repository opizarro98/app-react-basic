import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import styles from '../styles/styles';

function AddTaskScreen({ addTask, navigation }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
      Alert.alert('Correcto', 'Tarea creada con éxito, revise la lista de tareas.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe la tarea a crear"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Guardar Tarea" onPress={handleAddTask} />
    </View>
  );
}

export default AddTaskScreen;
