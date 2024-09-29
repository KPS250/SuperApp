import React from 'react';
import {Text, Pressable} from 'react-native';
import {styles} from './styles';

type PropTypes = {
  style?: StyleMedia;
  label?: string;
  onPress?: Function;
};

const Button = (props: PropTypes) => {
  const {style = {}, label = 'Next', onPress = () => {}} = props;

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default Button;
