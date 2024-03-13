import { ScrollView, Text, TouchableOpacity, View, Alert } from "react-native";
import RoomOverview from "./roomOverview";
import { styles } from "../styles/CheckoutMain";
import UserCredentials from "./userCredentials";
import CheckinCheckout from "./checkinChekout";
import TravellerMain from "./travellerMain";
import { useDispatch, useSelector } from "react-redux";
import dataStore from "../store/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../../footer/components/footer";
import { useEffect, useState } from "react";
import { addHotelDetails, resetStore } from "../redux/actions/roomQuantity.actions";
import SummaryComponent from "./summaryComponent";

export default function CheckoutMain({navigation,route }) {


  const dispatch = useDispatch();
  const { selectedHotelData, selectedRoomId } = route.params;
  // console.log(selectedHotelData)
  // console.log(selectedRoomId)

  // local state to store information about hotel and selected room
  const [hotelRoomInfo, setHotelRoomInfo] = useState({
    hotelName: selectedHotelData.name,
    hotelRoomId: selectedRoomId,
    hotelLocation: selectedHotelData.location,
    hotelDescription: selectedHotelData.desc,
    hotelPrice: selectedHotelData.price,
  });
// updating price field in store.
  useEffect(() => {
    dispatch(
      addHotelDetails({
        initial_price: hotelRoomInfo.hotelPrice,
        price: hotelRoomInfo.hotelPrice,
      })
    );
  }, []);

  // useEffect(() => {
  //   // checking data stored
  //   clearData();
  // }, []);

  // // Retrieve data from AsyncStorage
  // const retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("bookingDetails");
  //     if (value !== null) {
  //       console.log("Retrieved data:", value);
  //     } else {
  //       console.log("No data found");
  //     }
  //   } catch (error) {
  //     console.error("Error retrieving data:", error);
  //   }
  // };

  // clear data in storage
  // const clearData = async () => {
  //   try {
  //     // Remove the item with the specified key
  //     await AsyncStorage.removeItem("bookingDetails");
  //     console.log("Data cleared successfully");
  //   } catch (error) {
  //     console.error("Error clearing data:", error);
  //   }
  // };

  // generating random id
  const generateId = () => {
    const length = 6;
    let id = "";
    for (i = 0; i < length; i++) {
      const randomID = Math.floor(Math.random() * 10);
      id += randomID.toString();
    }
    // console.log("id is" + id);
    return id;
  };

  // required fields 
  const validateUserData = (excludeFields = []) => {
    const requiredFields = [
      "fullName",
      "email",
      "mobileNumber",
      "dateOfBirth",
      "gender",
      "checkin",
      "checkout",
    ];
    const userData = dataStore.getState();
    for (const field of requiredFields) {
      if (!excludeFields.includes(field) && !userData[field]) {
        return false;
      }
    }

    return true;
  };
  // save data to storage
  const handleSubmit = async () => {
    const isUserDataValid = validateUserData(["address"]);

    // validation for required fields
    if (!isUserDataValid) {
      Alert.alert("Incomplete Data ","You must fill in all required fields .");
      return;
    } else {
      try {
        const id = generateId();
        // setting current data from store along with id in varable- booking details
        const bookingDetails = {
          id,
          ...dataStore.getState(),
        };
        // Retrieve existing data from AsyncStorage
        const existingData = await AsyncStorage.getItem("bookingDetails");


        // Check whether there is any existing data
        let currentData = existingData ? JSON.parse(existingData) : [];
        if (!Array.isArray(currentData)) {
          currentData = [];
        }

        // Append the new booking details to the existing data
        currentData.push(bookingDetails);

        // storing data in async storage
        await AsyncStorage.setItem(
          "bookingDetails",
          JSON.stringify(currentData)
        );
        Alert.alert("Success","Your booking is confirmed.")
        // after saving the booking details restoring the initial state of store.
        dispatch(resetStore());

        // navigating user back to home screen
        navigation.navigate('Home')
        // console.log("Data saved successfully");
      } catch (error) {
        // console.error("Error saving data:", error);
        Alert.alert("Failure","something went wrong. Please try again.")
      }
    }
  };
  return (
    <>
    <ScrollView style={styles.checkoutContainer}>
      <RoomOverview hotelRoomInfo={hotelRoomInfo} />
      <UserCredentials />
      <CheckinCheckout />
      <TravellerMain />
      <SummaryComponent/>
      {/* proceed button */}
      <TouchableOpacity style={styles.proceedButton} onPress={handleSubmit}>
        <Text style={{ fontWeight: "bold", color: "white" }}>Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
    <Footer navigation={navigation}/>
    </>

    
  );
}
