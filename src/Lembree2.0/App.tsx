import { View } from "react-native";
import UserEditScreen from "./src/screens/user/UserEditScreen";
import TeamScreen from "./src/screens/team/TeamScreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TeamScreen />
    </View>
  );
}
