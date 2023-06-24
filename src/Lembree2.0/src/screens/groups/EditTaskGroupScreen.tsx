import { ImageBackground, Pressable } from "react-native";

import bg from "../assets/bg-app-edit-group.png";
import taskStyles from "../task/task.style";

function EditTaskGroupScreen({ navigation }: { navigation: any }) {
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
            navigation.navigate("TaskGroups");
          }}
        ></Pressable>
        <Pressable
          style={taskStyles.removeTask}
          onPress={() => {
            navigation.navigate("RemoveTaskGroup");
          }}
        ></Pressable>
      </>
    </>
  );
}

export default EditTaskGroupScreen;
