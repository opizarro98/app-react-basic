import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { CheckBox, Text } from 'react-native-elements'; // Importa CheckBox de React Native Elements
import styles from '../styles/styles';

function ViewTasksScreen({ tasks }) {
  const [checkedTasks, setCheckedTasks] = useState([]);

  const handleCheckBoxToggle = (task) => {
    const isChecked = checkedTasks.includes(task);
    if (isChecked) {
      setCheckedTasks(checkedTasks.filter((item) => item !== task));
    } else {
      setCheckedTasks([...checkedTasks, task]);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <CheckBox
        checked={checkedTasks.includes(item)}
        onPress={() => handleCheckBoxToggle(item)}
      />
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

export default ViewTasksScreen;
