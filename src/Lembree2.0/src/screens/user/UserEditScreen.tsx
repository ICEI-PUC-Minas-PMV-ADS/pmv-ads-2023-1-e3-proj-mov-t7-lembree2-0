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

import userStyles from "./user.style";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import TDButton from "../../components/form-elements/button/TDButton";
import profile from "../assets/mock";

function UserEditScreen({ navigation }: { navigation: any }) {
  const handleOnClick = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground source={bg} style={userStyles.container}>
      <StatusBar />
      <View style={userStyles.cabecalho}>
        <View style={userStyles.cabecalho__line_left} />
        <Image source={logo} />
        <View style={userStyles.cabecalho__line_right} />
      </View>
      <Text style={userStyles.title}>
        Sempre mantenha seus dados{"\n"}atualizados.
      </Text>
      <View style={userStyles.profile}>
        <Image
          style={userStyles.profile__image}
          source={{ uri: profile as any }}
        ></Image>
        <TDButton
          style={userStyles.profile__btn}
          textStyle={userStyles.profile__btn_text}
          text="Trocar de foto"
          onClick={handleOnClick}
        />
      </View>
      <View style={userStyles.form}>
        <TextInput style={userStyles.form__input} placeholder="nome" />
        <TextInput style={userStyles.form__input} placeholder="email" />
        <TextInput style={userStyles.form__input} placeholder="telefone" />
      </View>
      <TDButton
        text="Atualizar"
        icon={faCircleArrowRight}
        onClick={handleOnClick}
        iconStyle={userStyles.btn__save as ViewStyle}
      />
    </ImageBackground>
  );
}

export default UserEditScreen;
