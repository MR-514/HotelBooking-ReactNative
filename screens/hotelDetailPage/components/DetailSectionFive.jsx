import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/DetailSectionFive';

const DetailScreenFive = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hotelPoliciesMainContainer}>
        <View style={styles.roomOptionsHeadingDiv}>
          <Text style={styles.headingText}>Hotel Policies</Text>
          <View style={styles.hrLine} />
        </View>

        <View style={styles.hotelOptionsContent}>
          <View style={styles.policyItem}>
            <Icon name="check-circle" style={styles.checkIcon} />
            <Text style={styles.policyText}>Drinking and smoking within controlled limits are permitted at the farmhouse but please do not create a mess or ruckus at the house.</Text>
          </View>
          <View style={styles.policyItem}>
            <Icon name="check-circle" style={styles.checkIcon} />
            <Text style={styles.policyText}>Drugs and intoxicating illegal products are banned and not to be brought to the house or consumed.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default DetailScreenFive;
