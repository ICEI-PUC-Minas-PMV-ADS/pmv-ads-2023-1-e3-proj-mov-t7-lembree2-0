import { Pressable } from "react-native";
import navStyles from "./footer.style";

interface ITDButtonProps {
  navigation: any;
}

function FooterNav(props: ITDButtonProps) {
  const { navigation } = props;

  return (
    <>
      <Pressable
        style={navStyles.groups}
        onPress={() => {
          navigation.navigate("TaskGroups");
        }}
      ></Pressable>
      <Pressable
        style={navStyles.tasks}
        onPress={() => {
          navigation.navigate("Tasks");
        }}
      ></Pressable>
      <Pressable
        style={navStyles.addTask}
        onPress={() => {
          navigation.navigate("AddTask");
        }}
      ></Pressable>
      <Pressable
        style={navStyles.user}
        onPress={() => {
          navigation.navigate("UserEdit");
        }}
      ></Pressable>
      <Pressable
        style={navStyles.info}
        onPress={() => {
          navigation.navigate("Team");
        }}
      ></Pressable>
    </>
  );
}

export default FooterNav;
