import { ImageBackground, Pressable } from "react-native";

import bg from "../assets/bg-app-add-task.png";
import taskStyles from "./task.style";

function AddTaskScreen({ navigation }: { navigation: any }) {
  return (
    <>
      <ImageBackground
        source={bg}
        resizeMode="stretch"
        style={taskStyles.container}
      ></ImageBackground>
      <Pressable
        style={taskStyles.addTask}
        onPress={() => {
          navigation.navigate("Tasks");
        }}
      ></Pressable>
    </>
  );
}

export default AddTaskScreen;
