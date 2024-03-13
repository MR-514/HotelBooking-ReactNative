import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Button } from 'react-native-elements';
import { useHotelContext } from '../components/hotelcontext';

const PriceSlider = ({ onPriceChange }) => {
  const { doubleRangeSliderState, setDoubleRangeSliderState } = useHotelContext();

  const formatPrice = (value) => `Rs ${value}`;

  const handleChange = (newValues) => {
    setDoubleRangeSliderState(newValues);
    onPriceChange(newValues);
  };

  const handleClearAll = () => {
    const defaultValues = [0, 10000];
    setDoubleRangeSliderState(defaultValues);
    onPriceChange(defaultValues);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Price Range</Text>

      {/* Slider container */}
      <View style={styles.sliderContainer}>
        <MultiSlider
          values={doubleRangeSliderState}
          onValuesChange={handleChange}
          min={0}
          max={10000}
          step={1}
          sliderLength={250}
          snapped
          selectedStyle={{ backgroundColor: 'green' }}
        />
      </View>

      {/* Displaying selected price range and Clear All button */}
      <Text>Price Range: {formatPrice(doubleRangeSliderState[0])} to {formatPrice(doubleRangeSliderState[1])}</Text>
      <Button title="Clear All" onPress={handleClearAll}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    shadowOpacity: 5,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  heading: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 18,
  },
  sliderContainer: {
    alignItems: 'center',
  },
 
});

export default PriceSlider;
