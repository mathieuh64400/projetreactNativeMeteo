import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
  primary: 'black',
  secondary: 'white',
  tertiary: '#1F2937',
  fourth:"grey",
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
  alternative: "#999999",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

const statusBarHeight = Constants.statusBarHeight; 

export const Container = styled.SafeAreaView`
  background-color: ${Colors.primary};
  padding: 10px;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;
export const SpaceView = styled.View`
  padding-vertical: 10px;
  margin-top:5%;
  margin-bottom: 2px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;
export const HeaderView = styled.View`
  padding-vertical: 10px;
  margin-top:15%;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color:${Colors.primary}
`;

export const HeaderTitle = styled.Text`

  font-size: 35px;
  font-weight: bold;
  color: ${Colors.secondary};
  letter-spacing: 2px;
  font-style: italic;
`;
export const HeaderButton = styled.TouchableOpacity`

  font-weight: bold;
  color: ${Colors.secondary};
`;

// list des favorites
export const ListContainer = styled.View`
  margin-bottom: 10px;
  flex: 1;
  padding-bottom: 10px;
`;

export const ListView = styled.TouchableHighlight`
  background-color: ${Colors.secondary};
  min-height: 40px;
  width: 100%;
  marin-top:5%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 5px;
  border-radius: 10px;
`;

export const ListViewHidden = styled.View`
  background-color: ${Colors.tertiary};
  min-height: 40px;
  width: 100%;
  padding: 5px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-radius: 11px;
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 40px;
  align-items: center;
`;

export const TodoText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${Colors.fourth};
`;

// export const TodoDate = styled.Text`
//   font-size: 10px;
//   letter-spacing: 1px;
//   color: ${Colors.alternative};
//   text-align: right;
//   text-transform: uppercase;
// `;

// Text for swiped todo row
export const SwipedTodoText = styled(TodoText)`
  color: ${Colors.alternative};
  font-style: italic;
  text-decoration: line-through;
`;

// modal style

// export const ModalButton = styled.TouchableOpacity`
//   width: 60px;
//   height: 60px;
//   background-color: ${Colors.secondary};
//   border-radius: 50px;
//   justify-content: center;
//   align-items: center;
//   align-self: center;
//   position: absolute;
//   bottom: 5px;
 
  
// `;

export const ModalContainer = styled.View`
 
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${Colors.primary};
  
`;

export const ModalView = styled.View`
  background-color: ${Colors.secondary};
  border-radius: 2px;
  width:100%;

`;

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${Colors.tertiary};
  padding: 5px;
  font-size: 16px;
  // border-radius: 10px;
  color: ${Colors.secondary};
  letter-spacing: 1px;
  
`;

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 25px;
  background-color: ${(props) => props.Color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
 
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
  
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 1px;
  border:solid 1px grey;
`;




export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${Colors.primary};
`;

export const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;

`;
export const WelcomeBackgroundContainer =styled.View`
  width: 100%;
 height:100%;
`;
export const WelcomeContainer = styled.View`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.brand};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
    font-size: 35px;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${secondary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 33px;

  ${(props) =>
    props.google == true &&
    `
    background-color: ${green};
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;

  ${(props) =>
    props.google == true &&
    `
    color: ${primary};
    padding: 25px;
  `}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color:${props=>props.type=='SUCCESS' ? tertiary : red};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${secondary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;