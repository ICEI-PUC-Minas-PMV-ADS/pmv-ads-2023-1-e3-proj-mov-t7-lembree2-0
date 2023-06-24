import { ImageBackground, Pressable } from "react-native";

import bg from "../assets/bg-app-group.png";
import taskStyles from "../task/task.style";
import groupStyles from "./groups.style";

function TaskGroupScreen({ navigation }: { navigation: any }) {
  return (
    <>
      <ImageBackground
        source={bg}
        resizeMode="stretch"
        style={groupStyles.container}
      ></ImageBackground>
      <>
        <Pressable
          style={groupStyles.editTask1}
          onPress={() => {
            navigation.navigate("EditTaskGroup");
          }}
        ></Pressable>
        <Pressable
          style={groupStyles.editTask2}
          onPress={() => {
            navigation.navigate("EditTaskGroup");
          }}
        ></Pressable>
        <Pressable
          style={groupStyles.editTask3}
          onPress={() => {
            navigation.navigate("EditTaskGroup");
          }}
        ></Pressable>
        <Pressable
          style={groupStyles.groups}
          onPress={() => {
            navigation.navigate("AddTaskGroup");
          }}
        ></Pressable>
      </>
    </>
  );
}

export default TaskGroupScreen;
