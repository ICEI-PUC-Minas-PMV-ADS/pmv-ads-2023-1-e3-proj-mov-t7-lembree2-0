import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
  btn_icon_only: {},
  btn: {
    flexDirection: 'row',
    backgroundColor: '#332885',
    padding:17,
    width: '80%',
    borderRadius: 10
  },
  btn__text: {
    flex: 8,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: -3
  }
});

export default buttonStyles;
