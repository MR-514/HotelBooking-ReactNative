import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarComponent = ({ rating }) => {
  const maxStars = 5;
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <View style={{ flexDirection: 'row' }}>
      {/* Loop through each star index */}
      {Array.from({ length: maxStars }, (_, index) => {
        const isHalf = index === roundedRating - 0.5;
        const filled = index < roundedRating || isHalf;

        return (
          <Text key={index} style={{ color: filled ? 'gold' : 'grey' }}>
            {isHalf ? <Icon name="star-half-o" size={20} color="gold" /> : <Icon name="star" size={20} />}
          </Text>
        );
      })}
    </View>
  );
};

export default StarComponent;
