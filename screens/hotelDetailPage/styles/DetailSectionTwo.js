import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#f0f0f0',
    },
    sectionAbout: {
      padding: 20,
    },
    aboutHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      padding: 10,
      backgroundColor: '#ddd', 
      borderRadius: 10, 
    },
    icon: {
      fontSize: 30,
      
    },
    text: {
      marginBottom: 10,
      color: '#555',
    },
    advantagesHeading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    advantages: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    hrLine: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginTop: 5,
    },
  });