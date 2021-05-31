import React from 'react';
import * as yup from 'yup';

//Import react-native
import {View, Text, Image, TouchableOpacity, Alert, Button} from 'react-native';

//styles Import
import styles from './Style';
//Component Import
import {AppForm, AppFormField, SubmitButton} from '../../Components/forms';
import colors from '../../config/colors';
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});
function Login({navigation}) {
  return (
    <View style={styles.background}>
      {/* <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../Assets/logo.png')}></Image>
      </View> */}
      <View style={styles.buttonsContainer}>
        <AppForm
          initialValues={{email: '', password: ''}}
          onSubmit={Values => {
            console.log(Values);
          }}
          validationSchema={validationSchema}>
          <AppFormField
            placeholder="Email                            "
            autoCaptalize="none"
            icon="email"
            name="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            placeholder="Password                             "
            autoCaptalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            secureTextEntry={true}
          />
          <SubmitButton title="Login" />
          <Text style={{textAlign: 'center', color: colors.mediumGrey}}>
            OR
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{textAlign: 'center', color: colors.mediumGrey}}>
              Create Account with Email
            </Text>
          </TouchableOpacity>
        </AppForm>
      </View>
    </View>
  );
}

export default Login;
