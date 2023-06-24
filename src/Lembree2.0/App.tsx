import { View } from "react-native";
import WelcomeScreen from "./src/screens/welcome/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserEditScreen from "./src/screens/user/UserEditScreen";
import HomeScreen from "./src/screens/home/HomeScreen";
import TaskGroupScreen from "./src/screens/groups/TaskGroupScreen";
import AddTaskGroupScreen from "./src/screens/groups/AddTaskGroupScreen";
import EditTaskGroupScreen from "./src/screens/groups/EditTaskGroupScreen";
import RemoveTaskGroupScreen from "./src/screens/groups/RemoveTaskGroupScreen";
import TasksScreen from "./src/screens/task/TasksScreen";
import AddTaskScreen from "./src/screens/task/AddTaskScreen";
import EditTaskScreen from "./src/screens/task/EditTaskScreen";
import RemoveTaskScreen from "./src/screens/task/RemoveTaskScreen";
import TeamScreen from "./src/screens/team/TeamScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="UserEdit" component={UserEditScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TaskGroups" component={TaskGroupScreen} />
          <Stack.Screen name="AddTaskGroup" component={AddTaskGroupScreen} />
          <Stack.Screen name="EditTaskGroup" component={EditTaskGroupScreen} />
          <Stack.Screen
            name="RemoveTaskGroup"
            component={RemoveTaskGroupScreen}
          />
          <Stack.Screen name="Tasks" component={TasksScreen} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} />
          <Stack.Screen name="EditTask" component={EditTaskScreen} />
          <Stack.Screen name="RemoveTask" component={RemoveTaskScreen} />
          <Stack.Screen name="Team" component={TeamScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
