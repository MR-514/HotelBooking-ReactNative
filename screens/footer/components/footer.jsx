import React, { useState } from 'react';
import { Button, Image, Modal, Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserCog, MoreHorizontal, Phone, Mail, Facebook, Twitter,  Instagram, Linkedin   } from 'lucide-react-native';
import {styles} from "../footer-styles/footer.js";

export default FooterComp = ({navigation}) => {

  // state variable to make the modal popup visible and hidden
  const [isModalVisible, setIsModalVisible] = useState(false);

  // method to set the modal state variable
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 8 }}>

      <Pressable onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={30} color="#000"/>
      </Pressable>

      {/* <Icon name="sliders" size={24} color="#000" /> */}
      {/* <Icon name="user" size={30} color="#000" /> */}

      <Pressable onPress={() => navigation.navigate('AdminLogin')}>
        <UserCog size={30} color="#000"/>
      </Pressable>

      {/* modal displaying more information */}
      <Modal animationType="slide" visible={isModalVisible}>
        <View style={styles.popup_container}>

          {/* container to contain logo of the app */}
          <View style={styles.image_container}>
            <Image source={require('../../../assets/images/logo-light.png')} style={styles.logo}/>
          </View>

          <Text style={styles.additional_info_text}>Departure defective arranging rapturous did we believe him all had departed</Text>

          {/* section containing contact us info */}
          <View style={styles.sub_container}>
            <Text style={styles.sub_heading}>Contact Us</Text>

            {/* section containing phone number*/}
            <View style={styles.icons_text_container}>
              <Phone size={20} color="rgb(79, 150, 150)"/>
              <Text style={styles.phone_and_email_text}>+1234 568 963</Text>
            </View>

            {/* section containing email address */}
            <View style={styles.icons_text_container}>
              <Mail size={20} color="rgb(79, 150, 150)"/>
              <Text style={styles.phone_and_email_text}>Booking@gmail.com</Text>
            </View>
          </View>

          {/* payments and security section */}
          <View style={styles.sub_container}>
              <Text style={styles.sub_heading}>Payments & Security</Text>
              <View style={styles.icons}>
                <Image source={require('../../../assets/images/paypal.jpg')}/>
                <Image source={require('../../../assets/images/visa.jpg')}/>
                <Image source={require('../../../assets/images/mastercard.jpg')}/>
                <Image source={require('../../../assets/images/apple_pay.jpg')}/>
              </View>
          </View>

          {/* follow us section */}
          <View style={styles.sub_container}>
            <Text style={styles.sub_heading}>Follow us on</Text>
            <View style={styles.icons}>
                <Facebook size={35} color="rgb(212, 209, 209)"/>
                <Twitter size={35} color="rgb(212, 209, 209)"/>
                <Instagram size={35} color="rgb(212, 209, 209)"/>
                <Linkedin size={35} color="rgb(212, 209, 209)"/>
              </View>
          </View>

          <View style={styles.close_button_container}>
            <Button title="close" onPress={handleModal}/>
          </View>
        </View>
      </Modal>

      <Pressable onPress={handleModal}>
        <MoreHorizontal size={30} color="#000"/>
      </Pressable>

    </View>
  );
};
