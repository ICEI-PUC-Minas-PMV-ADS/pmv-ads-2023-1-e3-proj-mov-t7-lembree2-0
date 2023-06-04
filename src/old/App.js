import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);


function addTask() {
  if (editingIndex === -1) {
    setTasks([...tasks, { text: inputValue, concluded: false }]);
  } else {
    const newTasks = [...tasks];
    newTasks[editingIndex].text = inputValue;
    setTasks(newTasks);
    setEditingIndex(-1);
  }
  setInputValue('');
}


  function removeTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].concluded = !newTasks[index].concluded;
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Digite uma tarefa"
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Adicionar Tarefa</Text>
        </TouchableOpacity>
      </View>
      <FlatList
  data={tasks}
  renderItem={({ item, index }) => (
    <View style={styles.task}>
      <TouchableOpacity onPress={() => toggleTask(index)}>
        <Text style={[styles.taskText, item.concluded ? styles.taskTextConcluded : null]}>{item.text}</Text>
      </TouchableOpacity>
      {editingIndex === index ? (
        <>
          <TouchableOpacity style={styles.taskButton} onPress={() => setEditingIndex(-1)}>
            <Text style={styles.taskButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskButton} onPress={addTask}>
            <Text style={styles.taskButtonText}>Salvar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.taskButton} onPress={() => setEditingIndex(index)}>
            <Text style={styles.taskButtonText}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskButton} onPress={() => removeTask(index)}>
            <Text style={styles.taskButtonText}>Remover</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  )}
  keyExtractor={(item, index) => index.toString()}
/>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 8,
    fontSize: 16,
  },
  button: {
    padding: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  taskText: {
    fontSize: 16,
  },
  taskTextConcluded: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'black',
  },
  taskButton: {
    padding: 4,
    backgroundColor: '#f44336',
    borderRadius: 4,
  },
  taskButtonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default TodoList;