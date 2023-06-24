import { ImageBackground, Pressable } from "react-native";

import bg from "../assets/bg-app-team.png";
import taskStyles from "./team.style";

function TeamScreen({ navigation }: { navigation: any }) {
  return (
    <>
      <ImageBackground
        source={bg}
        resizeMode="stretch"
        style={taskStyles.container}
      ></ImageBackground>
    </>
  );
}

export default TeamScreen;
