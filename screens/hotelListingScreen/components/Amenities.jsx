import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { useHotelContext } from '../components/hotelcontext';

const Amenities = ({ onAmenitiesChange }) => {
  const { selectedAmenities, setSelectedAmenitiesState } = useHotelContext();

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const updatedSelectedAmenities = Object.keys(selectedAmenities).filter((key) => selectedAmenities[key]);
    onAmenitiesChange(updatedSelectedAmenities);
  }, [selectedAmenities]);

  const handleCheckboxChange = (item) => {
    setSelectedAmenitiesState((prevCheckedItems) => {
      let updatedCheckedItems;

      if (item === 'All') {
        updatedCheckedItems = Object.fromEntries(
          Object.entries(prevCheckedItems).map(([key, value]) => [key, !prevCheckedItems.All])
        );
      } else {
        updatedCheckedItems = { ...prevCheckedItems, [item]: !prevCheckedItems[item] };
        updatedCheckedItems.All = Object.values(updatedCheckedItems).every((value) => value);
      }
      return updatedCheckedItems;
    });
  };

  const handleClearAll = () => {
    setSelectedAmenitiesState((prevCheckedItems) => {
      const clearedItems = { ...prevCheckedItems };
      Object.keys(clearedItems).forEach((key) => {
        clearedItems[key] = false;
      });
      setSelectedAmenitiesState(clearedItems);
      return clearedItems;
    });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Amenities</Text>

        {/* Render amenities based on showMore state */}
        {Object.entries(selectedAmenities).map(([key, value], index) => (
          <View key={key} >
            {/* Only render amenities when showMore is true or when it's false and index is less than 5 */}
            {(showMore || (!showMore && index < 5)) && (
              <CheckBox title={key} checked={selectedAmenities[key]} onPress={() => handleCheckboxChange(key)} />
            )}
          </View>
        ))}

        {/* Toggle "See more" and "See less" */}
        {Object.keys(selectedAmenities).length > 5 && (
          <TouchableOpacity style={styles.seeMoreContainer} onPress={() => setShowMore(!showMore)}>
            <Text>{showMore ? 'See less' : 'See more'}</Text>
            <MaterialIcons name={showMore ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="black" />
          </TouchableOpacity>
        )}

        <Button title="Clear All" onPress={handleClearAll} style={styles.buttonContainer} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'black',
    width: '100%',
    marginTop: 25,
  },
  heading: {
    marginTop: 5,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  checkboxContainer: {
    marginTop: 10,
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default Amenities;
