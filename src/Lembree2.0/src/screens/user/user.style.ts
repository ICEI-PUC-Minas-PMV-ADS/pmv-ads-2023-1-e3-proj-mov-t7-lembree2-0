import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const title = {
  textAlign: 'center',
  color: '#24252C',
  fontSize: 25,
  fontWeight: '500',
} as TextStyle;

const line = {
  top: 16,
  height: 2,
  flex: 1,
  backgroundColor: '#4b4293',
} as ViewStyle;

const userStyles = StyleSheet.create({
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
  cabecalho__back_btn: {
    position: 'relative',
    flex: 1,
    color: '#332885',
    top: 1,
    left: 10
  },
  cabecalho__line_left: {
    ...line,
  },
  cabecalho__line_right: {
    ...line,
  },
  profile: {
    alignItems: 'center',
  },
  profile__image: {
    width: 200,
    height: 200,
    borderRadius: 200/ 2
  },
  profile__btn: {
    position: 'relative',
    top: -30,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#878490',
    maxWidth: 140
  },
  profile__btn_text: {
    fontSize: 15,
    fontWeight: '600'
  },
  form: {
    width: '100%',
    marginTop: 0,
  },
  form__input: {
    marginBottom: 15,
    borderRadius: 15,
    padding: 16,
    alignSelf: 'center',
    width: '80%',
    height: 63,
    backgroundColor: 'white'
  },
  btn__save: {
    position: 'relative',
    color: 'white',
    padding: 17
  },
  title: {
    ...title,
  },
  description: {
    ...title,
    fontSize: 14,
    color: '#878490',
  }
});

export default userStyles;
