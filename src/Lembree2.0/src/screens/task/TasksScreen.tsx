import { ImageBackground, Pressable } from "react-native";

import bg from "../assets/bg-app-task.png";
import taskStyles from "./task.style";

function TasksScreen({ navigation }: { navigation: any }) {
  return (
    <>
      <ImageBackground
        source={bg}
        resizeMode="stretch"
        style={taskStyles.container}
      ></ImageBackground>
      <>
        <Pressable
          style={taskStyles.editTask}
          onPress={() => {
            navigation.navigate("EditTask");
          }}
        ></Pressable>
        <Pressable
          style={taskStyles.groups}
          onPress={() => {
            navigation.navigate("AddTask");
          }}
        ></Pressable>
      </>
    </>
  );
}

export default TasksScreen;
