import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section1_main_container:{
    marginLeft:10,
    marginRight:10,
  },
    backgroundImage: {
      width: '100%',
      height: "100%", 
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    description: {
      color: 'white',
      textAlign: 'center',
      marginVertical: "1%",
      marginHorizontal:"2%",
    },
    discoverButton: {
      backgroundColor: 'white',
      padding: '4%',
      borderRadius: 5,
      marginTop: "8%",
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
    },
    contentContainer: {
      padding: 20,
      margin:"1%",
    },
    
  });