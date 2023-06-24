import { ImageBackground, Pressable } from "react-native";

import bg from "../assets/bg-app-add-group.png";
import taskStyles from "../task/task.style";

function AddTaskGroupScreen({ navigation }: { navigation: any }) {
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
          navigation.navigate("TaskGroups");
        }}
      ></Pressable>
    </>
  );
}

export default AddTaskGroupScreen;
