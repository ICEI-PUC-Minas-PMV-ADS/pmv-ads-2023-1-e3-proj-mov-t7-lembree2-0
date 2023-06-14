import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";

import bg from "../assets/bg-app-user.png";
import logo from "../assets/todo-logo.png";

import teamStyles from "./team.style";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import TDButton from "../../components/form-elements/button/TDButton";
import profile from "../assets/mock";

function TeamScreen() {
  const handleOnClick = () => {
    alert("a");
  };

  return (
    <ImageBackground source={bg} style={teamStyles.container}>
      <StatusBar />
      <View style={teamStyles.cabecalho}>
        <TDButton
          icon={faCircleArrowLeft}
          onClick={handleOnClick}
          iconStyle={teamStyles.cabecalho__back_btn}
        />
        <View style={teamStyles.cabecalho__line_left} />
        <Image source={logo} />
        <View style={teamStyles.cabecalho__line_right} />
        <View />
      </View>
      <Text style={teamStyles.title}>
        Sempre mantenha seus dados{"\n"}atualizados.
      </Text>

      <TDButton
        text="Atualizar"
        icon={faCircleArrowRight}
        onClick={handleOnClick}
        iconStyle={teamStyles.btn__save as ViewStyle}
      />
    </ImageBackground>
  );
}

export default TeamScreen;
