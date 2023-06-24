import { ImageBackground } from "react-native";

import bg from "../assets/bg-app-home.jpg";
import homeStyles from "./home.style";
import FooterNav from "../../components/navigation/FooterNav";

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <>
      <ImageBackground
        source={bg}
        resizeMode="stretch"
        style={homeStyles.container}
      ></ImageBackground>
      <FooterNav navigation={navigation} />
    </>
  );
}

export default HomeScreen;
