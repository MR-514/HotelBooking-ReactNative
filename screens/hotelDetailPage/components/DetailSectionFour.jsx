import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Card } from "react-native-elements";
import  styles  from "../styles/DetailSectionFour";

const DetailSectionFour = ({ roomData, navigation, handleRoomSelection }) => {
  const price = roomData.price;
  const desc = roomData.desc;
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = (roomId) => {
    const room = roomData.rooms.find((item) => item.roomId === roomId);
    setSelectedRoom(room);
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {roomData.rooms.map((item) => (
          <Card key={item.roomId} containerStyle={styles.cardContainer}>
            <TouchableOpacity onPress={() => toggleModal(item.roomId)}>
              <View style={styles.roomOptionImageContainer}>
                <Image source={{ uri: item.images[0] }} style={styles.roomImage} />
              </View>
            </TouchableOpacity>
            <View style={styles.roomOptionTextContainer}>
              <Text style={styles.roomId}>{`Room ${item.roomId}`}</Text>
              <View style={styles.detailRoomFacilities}>
                {item.roomFacilities.slice(0, 4).map((facility, index) => (
                  <Text key={index} style={styles.facilityList}>
                    {facility}
                  </Text>
                ))}
                {item.roomFacilities.length > 4 && (
                  <TouchableOpacity onPress={() => toggleModal(item.roomId)}>
                    <Text style={styles.moreLink}>More...</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.price}>
                <Text style={styles.priceText}>{`Price: ${price}`}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => handleRoomSelection(item.roomId)}
            >
              <Text style={styles.selectButtonText}>Select Room</Text>
            </TouchableOpacity>
          </Card>
        ))}
      </View>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          {selectedRoom && (
            <Card containerStyle={styles.modalCard}>
              <Image source={{ uri: selectedRoom.images[0] }} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{`Room ${selectedRoom.roomId}`} </Text>
              <Text>{desc}</Text>
              <Text style={styles.modalTitle}>{`Facilities`}</Text>
              {selectedRoom.roomFacilities.map((facility, index) => (
                <Text key={index} style={styles.modalFacilityList}>{facility}</Text>
              ))}
              <TouchableOpacity style={styles.closeButton} onPress={() => toggleModal(null)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </Card>
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};



export default DetailSectionFour;
