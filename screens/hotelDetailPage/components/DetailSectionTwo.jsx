import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/DetailSectionTwo';

const DetailSectionTwo = () => {
  const icons = ['wifi', 'tint', 'snowflake-o', 'bell']; 
  const mainHighlightsText =
    "Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why. Bad one supposing breakfast day fulfilled off depending questions";
  const otherText =
    "Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed fally right aware if oh truth. Large above be means. Dashwood does provide stronger is.";
  const advantages = [
    "Every hotel staff to have Proper PPT kit for COVID-19",
    "Every staff member wears face masks and gloves.", 
    "Hotel staff ensures to maintain social distancing at all times.",
    "The hotel has in-Room Dining options available.",
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.sectionAbout}>
        <Text style={styles.aboutHeading}>Main Highlights</Text>
        <View style={styles.hrLine} />
        <View style={styles.iconsContainer}>
          {icons.map((icon, index) => (
            <TouchableOpacity key={index} style={styles.iconContainer}>
              <Icon
                name={icon}
                size={25}
                style={styles.icon}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.text}>{mainHighlightsText}</Text>
        <Text style={styles.text}>{otherText}</Text>
        <Text style={styles.advantagesHeading}>Advantages</Text>
        {advantages.map((advantage, index) => (
          <View key={index} style={styles.advantages}>
            <Icon
              name="check-circle"
              size={25}
              style={{ color: 'green', marginRight: 10 }}
            />
            <Text style={styles.text}>{advantage}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};



export default DetailSectionTwo;
