import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    mainContainer :{
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        margin : 15
    },
    cardContainer: {
      width: 80,
      height: 80,
      borderRadius: 100,
      display:"flex",
      alignItems: 'center',
      justifyContent: 'center',
    },
    amenityHeading: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardContent: {
      backgroundColor: 'white',
    },
    amenityIcon: {
      fontSize: 30,
      color: '#333',
    },
    amenityContent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalCardContainer: {
      width: 250,
      borderRadius: 10,
      padding: 20,
      overflow: 'hidden',
    },
    modalHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalContent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    closeButton: {
      marginTop: 15,
      padding: 10,
      backgroundColor: 'lightblue',
      borderRadius: 5,
    },
  });