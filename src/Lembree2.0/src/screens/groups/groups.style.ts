import { StyleSheet, TextStyle } from "react-native";

const btn = {
  position: 'absolute',  
  width: '100%',
  height: 45,
  bottom: 17
} as TextStyle;

const btnEdit = {
  width: 25,
  height: 25,
  right: 70,  
} as TextStyle;

const groupStyles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  groups: {   
    ...btn
  },
  addTask: {   
    ...btn
  },
  editTask1: {   
    ...btn,
    ...btnEdit,
    top: 290,
  },
  editTask2: {   
    ...btn,
    ...btnEdit,
    top: 345,
  },
  editTask3: {   
    ...btn,
    ...btnEdit,
    top: 405,   
  }, 
  updateTask: {   
    ...btn,
    right: 57,  
    bottom: 18,
    width: 120,
  },
  removeTask: {   
    ...btn,
    left: 53,  
    bottom: 18,
    width: 120,        
  },
});

export default groupStyles;