import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import {  MapPin, Star } from 'lucide-react-native';
import { styles } from "../homePage-styles/featuredHotel";

const FeaturedHotels = ({ hotels, navigation }) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      horizontal
    >
      {hotels.map((hotel, index) => (
        <TouchableOpacity
          style={styles.card}
          key={index}
          onPress={() => navigation.navigate("HotelListing")}
        >
          <View style={styles.hotelImg}>
            <Image
              source={hotel.imgSrc}
              style={{ width: 280, height: 250, borderRadius: 10 }}
            />
            <View style={styles.locationBtn}>
              <MapPin fill="white" color="black" />
              <Text style={styles.locationText}>{hotel.location}</Text>
            </View>
          </View>
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <View style={styles.figCaption}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.rate}>${hotel.rate}</Text>
              <Text style={styles.startingAt}>/starting at</Text>
            </View>
            <View style={styles.rating}>
              <Text>{hotel.rating}</Text>
              <Star fill="#fdcc0d" size="20" />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default FeaturedHotels;
