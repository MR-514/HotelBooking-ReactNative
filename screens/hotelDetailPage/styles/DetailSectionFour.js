import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
    },
    cardContainer: {
      borderRadius: 10,
      width: "90%", 
    },
    roomOptionImageContainer: {
      width: "100%",
      height: 150,
      overflow: "hidden",
    },
    roomImage: {
      width: "100%",
      height: "100%",
      borderRadius: 8,
    },
    roomOptionTextContainer: {
      padding: 10,
    },
    roomId: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    detailRoomFacilities: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: 10,
    },
    facilityList: {
      marginRight: 10,
    },
    moreLink: {
      color: 'blue',
      textDecorationLine: 'underline',
      marginTop: 5,
    },
    price: {
      marginTop: 10,
    },
    priceText: {
      fontSize: 18,
      fontWeight: "bold",
    },
    selectButton: {
      backgroundColor: '#007BFF', 
      padding: 10,
      borderRadius: 5,
    },
    selectButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 20,
    },
    modalCard: {
      width: '80%',
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
    },
    modalImage: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 10,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'black',
    },
    modalFacilityList: {
      fontSize: 16,
      marginBottom: 5,
      color: 'black',
    },
    closeButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#007BFF',
      borderRadius: 5,
    },
    closeButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });