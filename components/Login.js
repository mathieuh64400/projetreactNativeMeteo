import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from 'formik';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
} from './../utils/styles.js';
import { View,ActivityIndicator } from 'react-native';

//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
// Import API:
import axios from 'axios';
const Login = ({ navigation }) => {
  // const pressHandler = () => {
  //   navigation.push("Welcome")

  const [hidePassword, setHidePassword] = useState(true);
  const [message,setMessage]=useState();
  const [messageType,setMessageType]=useState();


  const handleLogin= (credentials,setSubmitting)=>{
handleMessage(null);
// url heruku ? why

    axios.post(url,credentials).then(()=>{
      const result= response.data;
      const {message,status,data}=message;

      if(status !=='SUCCESS'){
        handleMessage(message,status);
      }else{
        navigation.navigate('Welcome',{...data[0]});
      }
      setSubmitting(false);
    }).catch(error=>{
      console.log(error.JSON());
      setSubmitting(false);
      handleMessage("Une erreur est survenue, verifier votre reseau internet")
    });
  }

  const handleMessage=(message,type='Failed')=>{
    setMessage(message);
    setMessageType(type);

  }
  //   }
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/img/logo2.png')} />
        <PageTitle>Metéo du Monde</PageTitle>
        {/* <SubTitle>Connexion</SubTitle> */}

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values,{setSubmitting}) => {(values)=>{
            if (values.email =='' || values.password =='') {
              handleMessage('remplissez les champs');
              setSubmitting(false);
            } else{
              handleLogin(values,setSubmitting);
            }
          }
            console.log(values);
            navigation.navigate("Welcome");
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values,isSubmitting }) => (
            <StyledFormArea>
              <MyTextInput
                label="votre adresse email"
                placeholder="matheiuh@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-adress"
                icon="mail"
              />
              <MyTextInput
                label="mot de passe"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                icon="lock"
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox type={messageType}>{message}</MsgBox>
             {!isSubmitting && <StyledButton onPress={handleSubmit}>
                <ButtonText>Connexion</ButtonText>
              </StyledButton>}

              {isSubmitting && <StyledButton disabled={true}>
                <ActivityIndicator size="large" color={primary}/>
              </StyledButton>}
              <Line />
              {/* <StyledButton google={true}>
                <Fontisto name="google" size={25} color={primary} />
                <ButtonText google={true}>Connexion avec Google</ButtonText>
              </StyledButton> */}
              <ExtraView>
                <ExtraText> Pas encore de Compte? </ExtraText>
                <TextLink onPress={()=>navigation.navigate("Signup")}>
                  <TextLinkContent>Signup</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;