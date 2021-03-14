import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

import apiService from '../ApiService';

const initialState = {
  email: '',
  password: '',
};

export default function Login({ navigation }) {
  const [email, setEmail] = useState(initialState.email);
  const [password, setPassword] = useState(initialState.password);

  const handleSubmit = async () => {
    const user = { email, password };

    const res = await apiService.login(user);
    console.log(res);
    if (res.error) {
      alert(`${res.message}`);
      setEmail(initialState.email);
      setPassword(initialState.password);
    } else {
      const { accessToken } = res;
      AsyncStorage.setItem('accessToken', accessToken);
      navigation.navigate('Home');
    }
  };

  const validateForm = () => {
    return !email || !password;
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainter}>
        <View style={styles.loginTextContainter}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.inputsContainter}>
          <View style={{ marginBottom: 80 }}>
            <TextInput
              textContentType="emailAddress"
              style={styles.input}
              placeholder="email"
              name="email"
              returnKeyType="done"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="password"
              name="password"
              returnKeyType="done"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity disabled={validateForm()} onPress={handleSubmit}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2022',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginContainter: {
    backgroundColor: '#f0f5f9',
    height: 700,
    width: 350,
    borderRadius: 20,
  },
  inputsContainter: {
    height: 400,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    marginTop: 20,
    width: 250,
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
  },

  loginTextContainter: {
    // backgroundColor: 'red',
    marginTop: 70,
    marginLeft: 30,
  },

  loginText: {
    fontSize: 60,
    fontFamily: 'Geeza Pro',
    fontWeight: '600',
  },

  loginButton: {
    backgroundColor: '#1E2022',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
  },

  loginButtonText: {
    fontFamily: 'Geeza Pro',
    color: '#f0f5f9',
    fontSize: 25,
  },
});
