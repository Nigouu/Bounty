import React from 'react';
import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import * as yup from 'yup';

const styles = StyleSheet.create({

  loginContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
})

const SignIn = () => {
  const validationSchema = yup.object().shape({
    email: yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Too long!')
      .required('Required'),
    password: yup.string()
      .min(2, 'Too short!')
      .max(15, 'Too long!')
      .required('Required'),
  });

  return (
    <View style={styles.loginContainer}>
          <Text>Login Screen</Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                <Pressable onPress={handleSubmit}>
                  <Text>Submit me mothafucka!!</Text>
                </Pressable>
              </>
            )}
          </Formik>
        </View>
  )
};

export default SignIn;