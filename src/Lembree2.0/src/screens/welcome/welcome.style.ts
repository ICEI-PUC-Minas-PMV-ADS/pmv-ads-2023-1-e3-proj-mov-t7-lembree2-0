import { FontAwesomeIconStyle } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const title = {
  textAlign: 'center',
  color: '#24252C',
  fontSize: 25,
  fontWeight: '500',
  marginTop:47,
} as TextStyle;

const line = {
  top: 16,
  height: 2,
  flex: 1,
  backgroundColor: '#4b4293',
} as ViewStyle;

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cabecalho: {
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
    left: 0,
    width: '100%',
    gap: 20,
  },
  cabecalho__line_left: {
    ...line,
  },
  cabecalho__line_right: {
    ...line,
  },
  image: {
    marginTop: 120,
  },
  title: {
    ...title
  },
  description: {
    ...title,
    fontSize: 14,
    color: '#878490',
  },
  btn__save: {
    position: 'relative',
    color: 'white',
    padding: 17
  },
});

export default welcomeStyles;
