import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useHotelContext } from '../components/hotelcontext'; 

const HotelTypes = ({ onChange }) => {
  const { hotelTypesCheckedItems, setHotelTypesCheckedItems } = useHotelContext();

  useEffect(() => {
     // Filter out selected types and pass them to the parent component through the onChange prop
    const updatedSelectedTypes = Object.keys(hotelTypesCheckedItems).filter((key) => hotelTypesCheckedItems[key]);
    onChange(updatedSelectedTypes);
  }, [hotelTypesCheckedItems]);

  const handleCheckboxChange = (item) => {
    setHotelTypesCheckedItems((prevCheckedItems) => {
      let updatedCheckedItems;
      // If 'All' checkbox is clicked, toggle all checkboxes
      if (item === 'All') {
        updatedCheckedItems = Object.keys(prevCheckedItems).reduce((acc, key) => {
          acc[key] = !prevCheckedItems.All;
          return acc;
        }, {});
      } else {
        // Toggle the clicked checkbox and update 'All' checkbox accordingly
        updatedCheckedItems = { ...prevCheckedItems, [item]: !prevCheckedItems[item] };
        updatedCheckedItems.All = Object.values(updatedCheckedItems).every((value) => value);
      }

      return updatedCheckedItems;
    });
  };

  const handleClearAll = () => {
    // Create a new object with all checkboxes set to false
    const updatedCheckedItems = { ...hotelTypesCheckedItems };

    Object.keys(updatedCheckedItems).forEach((key) => {
      updatedCheckedItems[key] = false;
    });
    
    // Update the state with the new object
    setHotelTypesCheckedItems(updatedCheckedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hotel Type</Text>
      {/* Iterate through each checkbox item */}
      {Object.keys(hotelTypesCheckedItems).map((item) => (
        <View key={item} style={styles.checkboxContainer}>
           {/* CheckBox component for each hotel type */}
          <CheckBox
            title={item}
            checked={hotelTypesCheckedItems[item]}
            onPress={() => handleCheckboxChange(item)}
          />
        </View>
      ))}
       {/* Clear All button */}
      <View style={styles.buttonContainer}>
        <Button title="Clear All" onPress={handleClearAll} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'black',
    width: '100%',
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
  buttonContainer: {
    marginTop: 10,
  },
});

export default HotelTypes;
