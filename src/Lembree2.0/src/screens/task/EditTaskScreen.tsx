import { ImageBackground, Pressable } from "react-native";

import bg from "../assets/bg-app-edit-task.png";
import taskStyles from "./task.style";

function EditTaskScreen({ navigation }: { navigation: any }) {
  return (
    <>
      <ImageBackground
        source={bg}
        resizeMode="stretch"
        style={taskStyles.container}
      ></ImageBackground>
      <>
        <Pressable
          style={taskStyles.updateTask}
          onPress={() => {
            navigation.navigate("Tasks");
          }}
        ></Pressable>
        <Pressable
          style={taskStyles.removeTask}
          onPress={() => {
            navigation.navigate("RemoveTask");
          }}
        ></Pressable>
      </>
    </>
  );
}

export default EditTaskScreen;
