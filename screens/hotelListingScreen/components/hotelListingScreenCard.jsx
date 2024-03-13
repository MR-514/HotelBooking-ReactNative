import { styles } from "../hotelListingScreen-styles/hotelListingScreen";
import { Image, Pressable, Text, View, Modal, Button, StyleSheet, TouchableOpacity } from "react-native";
import {  Star, StarHalf, MapPin, CheckCircle,  Dot, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react-native';
import { useState } from "react";
import StarComponent from "./ratingComp";

export default HotelListingScreenCard = (props) => {

    // state variable to make the modal popup visible and hidden
    const [isModalVisible, setIsModalVisible] = useState(false);

    // method to set the modal state variable
    const handleModal = () => setIsModalVisible(() => !isModalVisible);


    const handleDetail=()=>{
        props.navigation.navigate('HotelDetail', { selectedHotelIndex: props.hotelListingObj.id - 1 });
    }

    return(
        <>
            {/* main container of the card */}
            <View style={styles.hotel_list_maincontainer}>

                {/* image container of the card */}
                <View style={styles.hotel_list_imagecontainer}> 
                    <Image style={styles.hotel_list_image} source={{uri:props.hotelListingObj.img}} width={300} height={200}/>
                </View>

                {/* text container of the card */}
                <View style={styles.hotel_list_textcontainer}>
                    <View style={styles.textcontainer_section1}>

                        {/* user ratings */}
                        <View style={styles.user_ratings}>
                            <StarComponent rating={props.hotelListingObj.rating}/>
                        </View>

                        {/* hotel name and location */}
                        <View style={styles.rightcontainer_section2}>
                            <Text style={styles.hotel_name}>{props.hotelListingObj.name}</Text>

                            {/* location section */}
                            <View style={styles.location_section}>
                                <MapPin color="grey" size="20"/>
                                <Text style={styles.location}>{props.hotelListingObj.location}</Text>
                            </View>

                            {/* displaying the facilities of the hotel */}
                            <View style={styles.facilities_section}>
                                {props.hotelListingObj.Facilities.slice(0,3).map((item, idx) => (
                                    <Text style={styles.facilities} key={idx}>{item}</Text>
                                ))}
                                <Text onPress={handleModal} style={{color:"blue", fontSize:12}}>More+</Text>

                                {/* modal displaying additional hotel details */}
                                <Modal animationType="slide" visible={isModalVisible}>
                                    <View style={styles.popup_container}>
                                        <View >
                                            <View style={styles.popup_content}> 
                                                <Text style={styles.hotel_name}>{props.hotelListingObj.name}</Text>

                                                <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginBottom:5}} />

                                                <Text style={styles.detailed_description}>{props.hotelListingObj.longDesc}</Text>
                                            </View>
                                        </View>
                                        
                                        <View style={styles.additional_features_container}>
                                            {props.hotelListingObj.Facilities.map((item, idx) => (
                                                <View key={idx} style={styles.additional_facilities_content}>
                                                    < Dot color="black"/>
                                                    <Text>{item}</Text>
                                                </View>
                                            ))}
                                        </View>
                                        
                                        <Button title="close" onPress={handleModal} />
                                    </View>
                                </Modal>

                                
                            </View>
                        </View>

                        {/* displaying the additional information of the hotel dynamically from json */}
                        <View style={styles.additional_info_section}>
                            {props.hotelListingObj.additionalInfo.length == 2 ? 
                                <View style={styles.additionalInfo_main_section}>
                                    <View style={styles.additionalInfo_sub_sections}>
                                        <CheckCircle color="white" fill="green" size="20"/> 
                                        <Text style={styles.additionalInfo_text}>{props.hotelListingObj.additionalInfo[0]}</Text>
                                    </View>
                                    <View style={styles.additionalInfo_sub_sections}>
                                        <CheckCircle color="white" fill="green" size="20"/> 
                                        <Text style={styles.additionalInfo_text}>{props.hotelListingObj.additionalInfo[1]}</Text>
                                    </View>
                                </View>
                                : 
                                <View style={styles.additionalInfo_sub_sections}>
                                        <CheckCircle color="white" fill="red" size="20"/> 
                                        <Text style={styles.additionalInfo_text}>{props.hotelListingObj.additionalInfo[0]}</Text>
                                </View>
                            }
                        </View>

                        {/* hotel price */}
                        <View style={styles.hotel_price_section}>
                            <View style={styles.hotel_price}>
                                <Text style={styles.hotel_price_text}>Rs {props.hotelListingObj.price}</Text>
                                <Text style={{textDecorationLine:'line-through', textDecorationStyle:'solid', color:"rgb(117, 116, 116)"}}>10000</Text>
                            </View>
                            <TouchableOpacity style={styles.select_rooms_button} onPress={handleDetail}>
                                <Text style={styles.select_rooms_text}>Select Room</Text>
                            </TouchableOpacity>
                        </View>
                    </View>   
                </View>
            </View>
        </>
    )
}