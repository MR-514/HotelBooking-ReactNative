import { ScrollView, Text, View } from "react-native";
import DetailSectionOne from "./DetailsectionOne";
import DetailSectionTwo from "./DetailSectionTwo";
import DetailSectionThree from "./DetailSectionThree";
import DetailSectionFour from "./DetailSectionFour";
import hotelData from "../../../assets/json/hotel-booking.json";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import Footer from "../../footer/components/footer";
import DetailScreenFive from "./DetailSectionFive";



export default DetailScreenMain = ({navigation}) => {
  // const [selectedHotelIndex, setSelectedHotelIndex] = useState(0);

  const route = useRoute();
  const selectedHotelIndex = route.params?.selectedHotelIndex || 0;

  const [selectedHotelData, setSelectedHotelData] = useState(
    hotelData.items[selectedHotelIndex]
  );

  // Log the selectedHotelData
  // console.log("Selected Hotel Data:", selectedHotelData);

  const handleRoomSelection = (id) => {
    navigation.navigate("Checkout", {
      selectedHotelData : selectedHotelData,
      selectedRoomId: id,
    });
    // console.log("select room clicked" + id);
  };

  return (
    <>
    <ScrollView>
      <DetailSectionOne hotelinfo={selectedHotelData} />
      <DetailSectionTwo />
      <DetailSectionThree />

      <DetailSectionFour
        roomData={selectedHotelData}
        navigation={navigation}
        handleRoomSelection={handleRoomSelection}
      />
      <DetailScreenFive/>
      {/* <Text>Hello</Text> */}
    </ScrollView>
    <Footer navigation={navigation}/>
   </>
  );
};
