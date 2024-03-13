import React, { useState } from 'react';
import { ScrollView, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import { FontAwesome as FaIcon } from '@expo/vector-icons';
import MapView from 'react-native-maps'; 
import styles from "../styles/DetailsectionOne";


const DetailSectionOne = ({ hotelinfo }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openMapModal = () => {
    setModalVisible(true);
  };

  const closeMapModal = () => {
    setModalVisible(false);
  };
  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  return (
    <ScrollView>
        <View style={styles.infoContainer}>
  <Text style={styles.hotelName}>{hotelinfo.name}</Text>
  <TouchableOpacity onPress={openMapModal}>
  <View style={styles.locationContainer} >
    <FaIcon name="map-marker" size={24} color="black" />
    <Text style={styles.locationText}>{hotelinfo.location}</Text>
  </View>
  </TouchableOpacity>
</View>
      <View style={styles.imgSection}>

        <View style={styles.imageSection}>
          <View style={styles.gridContent}>
            <TouchableOpacity 
              onPress={() => openImageModal(require("../../../assets/images/16.jpg"))}
              style={styles.image}>
            <Image
              source={require("../../../assets/images/16.jpg")}
              style={styles.image}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.gridContent}>
            <TouchableOpacity 
              onPress={() => openImageModal(require("../../../assets/images/13.jpg"))}
              style={styles.image}>
            <Image
              source={require("../../../assets/images/13.jpg")}
              style={styles.image}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.gridContent}>
            <TouchableOpacity 
              onPress={() => openImageModal(require("../../../assets/images/12(1).jpg"))}
              style={styles.image}>
            <Image
              source={require("../../../assets/images/12(1).jpg")}
              style={styles.image}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.gridContent}>
            <TouchableOpacity 
              onPress={() => openImageModal(require("../../../assets/images/room11.jpg"))}
              style={styles.image}>
            <Image
              source={require("../../../assets/images/room11.jpg")}
              style={styles.image}
            />
            </TouchableOpacity>
          </View>
          
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeMapModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Bengaluru Map</Text>
          <MapView
            style={styles.map}
            region={{
              latitude: 12.9716, 
              longitude: 77.5946, 
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          <TouchableOpacity onPress={closeMapModal} style={styles.closeButton}>
            <Text>Close Map</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {selectedImage && (
        <Modal
          animationType="fade"
          transparent={false}
          visible={!!selectedImage}
          onRequestClose={closeImageModal}
        >
          <View style={styles.modalContainer}>
            <Image source={selectedImage} style={styles.enlargedImage} resizeMode="contain" />
            <TouchableOpacity onPress={closeImageModal} style={styles.closeButton}>
              <Text>Close Image</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
      
    </ScrollView>
  );
};


export default DetailSectionOne;
