import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const menuDefault = {        
    position: 'absolute',  
    width: 30,
    height: 30,    
  }  as TextStyle;

const navStyles = StyleSheet.create({  
  groups: {    
    bottom: 10,
    left: 60,    
    ...menuDefault 
  },
  tasks: {    
    bottom: 10,
    left: 120,    
    ...menuDefault 
  },
  user: {    
    bottom: 10,
    left: 270,    
    ...menuDefault 
  },
  info: {    
    bottom: 10,
    left: 330,    
    ...menuDefault 
  },
  addTask: {    
    ...menuDefault,
    width: 50,
    height: 50, 
    bottom: 30,
    left: 185
  },
});

export default navStyles;
