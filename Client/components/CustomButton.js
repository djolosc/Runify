import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';

const CustomButton = ({ text, handlePress }) => {
  useEffect(() => StatusBar.setHidden(true));
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F0F5F9',
    height: 125,
    width: 125,
    margin: 22,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 30,
    color: '#1E2022',
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Geeza Pro',
  },
});

export default CustomButton;
