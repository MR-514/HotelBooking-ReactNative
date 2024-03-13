import { ScrollView, Text, View } from "react-native";
import {styles} from "../admin-styles/admin.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export default AdminLanding = () => {
    
    const [booking_details, setBookingDetails] = useState([]);

    
    useEffect(() => {
        AsyncStorage.getItem('bookingDetails')
            .then((data) => {
                var booking_details = JSON.parse(data);
                setBookingDetails(booking_details);
                // console.log(booking_details)
        })
    }, []); 

    const obtainDate=(data)=>{
        let date = new Date(data);

        let formattedDate = date.toLocaleDateString('en-GB', {
            year : 'numeric',
            month: 'numeric',
            day:'numeric'
        })

        return formattedDate;
    }

    return(
        <>
            <ScrollView>
                <View style={styles.admin_landing_main_container}>
                    {
                        
                        booking_details && booking_details.map((dataObj, index) => (
                            <View key={index} style={styles.details_container}>
                                <Text style={styles.booking_text1}>Booking Id: {dataObj.id}</Text>
                                
                                <View style={styles.dates_container}>
                                    <Text style={styles.booking_text3}>Check-in: {obtainDate(dataObj.checkin)}</Text>
                                    <Text style={styles.booking_text4}>Check-out: {obtainDate(dataObj.checkout)}</Text>
                                </View>
                                <Text style={styles.booking_text2}>Booked by: {dataObj.fullName}</Text>
                                <Text style={styles.booking_text5}>Guest: {dataObj.numberOfTravellers}</Text>
                                <Text style={styles.booking_text6}>Amount: {dataObj.price}</Text>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </>
    )
}
