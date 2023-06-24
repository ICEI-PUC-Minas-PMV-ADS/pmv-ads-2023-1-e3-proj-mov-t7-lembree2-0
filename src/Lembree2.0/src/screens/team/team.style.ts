import { StyleSheet, TextStyle } from "react-native";

const btn = {
  position: 'absolute',  
  width: '100%',
  height: 45,
  bottom: 17,  
} as TextStyle;

const taskStyles = StyleSheet.create({
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
  editTask: {   
    ...btn,
    bottom: 270,
    height: 90,    
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

export default taskStyles;