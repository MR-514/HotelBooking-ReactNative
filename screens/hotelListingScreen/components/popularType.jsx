import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const PopularType = () => {
  const [checkedItems, setCheckedItems] = useState({
    'Free Breakfast Included': false,
    'Pay At Hotel Available': false,
    'Free Cancellation Available': false,
  });

  // function for checkbox change
  const handleCheckboxChange = (item) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [item]: !prevCheckedItems[item],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Type</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Free Breakfast Included"
          checked={checkedItems['Free Breakfast Included']}
          onPress={() => handleCheckboxChange('Free Breakfast Included')}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Pay At Hotel Available"
          checked={checkedItems['Pay At Hotel Available']}
          onPress={() => handleCheckboxChange('Pay At Hotel Available')}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title="Free Cancellation Available"
          checked={checkedItems['Free Cancellation Available']}
          onPress={() => handleCheckboxChange('Free Cancellation Available')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    width: '100%',
  },
  heading: {
    marginTop: 5,
    marginLeft:10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  checkboxContainer: {
    marginTop: 10,
  },
});

export default PopularType;
