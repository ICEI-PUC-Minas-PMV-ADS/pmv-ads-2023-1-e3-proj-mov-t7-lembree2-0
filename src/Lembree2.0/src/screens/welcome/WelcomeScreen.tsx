import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Text, View, ViewStyle } from 'react-native';

import bg from '../assets/bg-app-welcome.png';
import task from '../assets/task-draw.png';
import logo from '../assets/todo-logo.png';

import welcomeStyles from './welcome.style';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import TDButton from '../../components/form-elements/button/TDButton';

function WelcomeScreen() {
  const handleOnClick = () => {
    alert('Hello!');
  };

  return (
    <ImageBackground source={bg} style={welcomeStyles.container}>
      <StatusBar />
      <View style={welcomeStyles.cabecalho}>
        <View style={welcomeStyles.cabecalho__line_left} />
        <Image source={logo} />
        <View style={welcomeStyles.cabecalho__line_right} />
      </View>
      <Image source={task} style={welcomeStyles.image}></Image>
      <Text style={welcomeStyles.title}>
        Gerenciador de Tarefas{'\n'}guiado por To-Do List
      </Text>
      <Text style={welcomeStyles.description}>
        Melhore sua produtividade com o nosso{'\n'}gerenciador de tarefas
      </Text>
      <TDButton
        text="Vamos lá"
        icon={faCircleArrowRight}
        onClick={handleOnClick}
        iconStyle={welcomeStyles.btn__save as ViewStyle}
      />
    </ImageBackground>
  );
}

export default WelcomeScreen;
