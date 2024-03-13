import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/detailSectioThree";

const DetailSectionThree = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const amenitiesData = [
    {
      category: 'Activities',
      icon: 'bicycle',
      items: ['Swimming pool', 'Spa', 'Kids play area', 'Gym'],
    },
    {
      category: 'Services',
      icon: 'bell',
      items: ['Dry Cleaning', 'Room Service', 'Laundry facilities', 'Ironing Service', 'Lift'],
    },
    {
      category: 'Payment Method',
      icon: 'credit-card',
      items: ['Credit card (Visa Master card)', 'Cash', 'Debit Card'],
    },
    {
      category: 'Safety & Security',
      icon: 'shield',
      items: ['Doctor on Call'],
    },
    {
      category: 'Staff Language',
      icon: 'volume-up',
      items: ['English', 'Hindi'],
    },
  ];

  const openModal = (category) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setModalVisible(false);
  };

  return (
    <ScrollView style={{borderWidth : 2,borderColor:"rgba(0,0,0,0.1)"}} horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      {amenitiesData.map((amenity, index) => (
        <View key={index}>
          <TouchableOpacity style={styles.mainContainer} key={index} onPress={() => openModal(amenity)}>
            <Text style={styles.amenityHeading}>{amenity.category}</Text>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Icon name={amenity.icon} size={40} style={styles.amenityIcon} />
              
            </View>
          </Card>
        </TouchableOpacity>
        </View>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <Card containerStyle={styles.modalCardContainer}>
            <Text style={styles.modalHeader}>{selectedCategory?.category}</Text>
            {selectedCategory?.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.modalContent}>
                <Icon name="check-circle" size={20} style={{ color: 'green', marginRight: 5 }} />
                <Text>{item}</Text>
              </View>
            ))}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text>Close</Text>
            </TouchableOpacity>
          </Card>
        </View>
      </Modal>
    </ScrollView>
  );
};



export default DetailSectionThree;
