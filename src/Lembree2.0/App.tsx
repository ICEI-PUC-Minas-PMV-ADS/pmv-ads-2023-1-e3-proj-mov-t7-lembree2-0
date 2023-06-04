import { View } from 'react-native';
import UserEditScreen from './src/screens/user/UserEditScreen';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <UserEditScreen />
    </View>
  );
}
