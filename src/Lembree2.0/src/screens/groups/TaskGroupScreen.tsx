import { ImageBackground, Pressable } from "react-native";

import bg from "../assets/bg-app-group.png";
import taskStyles from "../task/task.style";

function TaskGroupScreen({ navigation }: { navigation: any }) {
  return (
    <>
      <ImageBackground
        source={bg}
        resizeMode="stretch"
        style={taskStyles.container}
      ></ImageBackground>
      <>
        <Pressable
          style={taskStyles.editTask1}
          onPress={() => {
            navigation.navigate("EditTaskGroup");
          }}
        ></Pressable>
        <Pressable
          style={taskStyles.editTask2}
          onPress={() => {
            navigation.navigate("EditTaskGroup");
          }}
        ></Pressable>
        <Pressable
          style={taskStyles.editTask3}
          onPress={() => {
            navigation.navigate("EditTaskGroup");
          }}
        ></Pressable>
        <Pressable
          style={taskStyles.groups}
          onPress={() => {
            navigation.navigate("AddTaskGroup");
          }}
        ></Pressable>
      </>
    </>
  );
}

export default TaskGroupScreen;
