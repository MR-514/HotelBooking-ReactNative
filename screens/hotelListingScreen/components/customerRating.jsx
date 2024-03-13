import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useHotelContext } from '../components/hotelcontext'; 

const CustomerRating = ({ onRatingChange }) => {
  const { selectedRating, setSelectedRatingState } = useHotelContext();
  const [localRating, setLocalRating] = useState(selectedRating);


  const handleRatingClick = (rating) => {
    // Toggle the rating if clicked again
    const newRating = localRating === rating ? null : rating;

    // Update the local state
    setLocalRating(newRating);

    // Notify the parent component about the selected rating
    onRatingChange && onRatingChange(newRating);

    // Update the context state
    setSelectedRatingState(newRating);
  };

  const handleClearAll = () => {
    // Clear the locally stored rating
    setLocalRating(null);

    // Notify the parent component about the cleared rating
    onRatingChange && onRatingChange(null);

    // Clear the context state
    setSelectedRatingState(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customer Rating</Text>
      <View style={styles.ratingContainer}>
        {[3, 3.5, 4, 4.5].map((rating) => (
          <RatingBox
            key={rating}
            value={rating}
            onClick={() => handleRatingClick(rating)}
            isSelected={localRating === rating}
          />
        ))}
      </View>
      <View style={{marginTop:20}}>
           <Button title="Clear All" onPress={handleClearAll} />
      </View>
    </View>
  );
};

// RatingBox component for each rating options
const RatingBox = ({ value, onClick, isSelected }) => (
  <TouchableOpacity onPress={onClick} style={[styles.ratingBox, isSelected && styles.selectedBox]}>
    <Text style={styles.ratingText}>{value}</Text>
  </TouchableOpacity>
);

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
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  ratingBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  selectedBox: {
    backgroundColor: '#ccc',
  },
  ratingText: {
    margin: 0,
    lineHeight: 20,
    fontSize: 16,
    color: 'black',
  },
  
});

export default CustomerRating;
