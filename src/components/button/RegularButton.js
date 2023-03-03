import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

const RegularButton = (props) => {
  return (
    <>
      <TouchableOpacity style={styles.bgDark} onPress={props.onPress}>
        <Text style={styles.btnTitle}>{props.title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  bgDark: {
    backgroundColor: '#ff00ff'
  },
  btnTitle: {
    color: '#fff',
    fontSize: 69
  }
});

export default RegularButton;
