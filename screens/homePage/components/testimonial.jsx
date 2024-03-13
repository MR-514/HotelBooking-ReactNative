import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "../homePage-styles/testimonial";
import {  Star, StarHalf } from 'lucide-react-native';

export let Testimonial = (props) => {
    return(
        <>
                <View style={styles.section4_section}>

                    {/* section4 division containing image */}
                    <View style={styles.section4_left_img_div}>
                        <Image source={props.testimonial.section4_left_img_1}  style={styles.section4_left_img}/>
                    </View>

                    {/* section4 right division containig text */}
                    <View style={styles.section4_right_text_div}>
                        <Image source={require('../../../assets/images/double-quote.png')} style={styles.doubleQuote}/>

                        <Text style={styles.section4_right_text_div_text}>Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs.Understood the preference unreserved.</Text>

                        <View style={styles.rating_div}>
                            <Star  fill="#fdcc0d" size="20"/>
                            <Star  fill="#fdcc0d" size="20"/>
                            <Star  fill="#fdcc0d" size="20"/>
                            <Star  fill="#fdcc0d" size="20"/>
                            <StarHalf   fill="#fdcc0d" size="20"/>
                        </View>

                        <Text style={styles.user_name}>{props.testimonial.section4_customer_name}</Text>

                        <Text style={styles.occupation_text}>occupation</Text>
                    </View>
                </View>
        </>
    )
}
