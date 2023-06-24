import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";
import buttonStyles from "./td.button.style";

interface ITDButtonProps {
  text?: string;
  icon?: IconDefinition;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: ViewStyle;
  onClick?: () => void;
}

function TDButton(props: ITDButtonProps) {
  const {
    text,
    icon,
    style = {},
    iconStyle = {},
    textStyle = {},
    onClick = () => {},
  } = props;

  const getBtnClass = () =>
    !text && icon
      ? { ...buttonStyles.btn_icon_only, ...style }
      : { ...buttonStyles.btn, ...style };

  return (
    <Pressable style={getBtnClass()} onPress={onClick}>
      {text && <Text style={[buttonStyles.btn__text, textStyle]}>{text}</Text>}
      {icon && <FontAwesomeIcon size={30} icon={icon} style={iconStyle} />}
    </Pressable>
  );
}

export default TDButton;
