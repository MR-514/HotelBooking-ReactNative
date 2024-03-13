import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    section4_section: {
        boxSizing: "border-box",
        display: "flex",
        flexDirection:"column",
        marginTop:25,
        marginBottom:25
    },
    section4_left_img_div: {
        alignItems:"center",
        justifyContent:"center"
    },
    /* testimonial image styling */
    section4_left_img: {
        width:300,
        height:300,
        borderRadius: 5,
        position:"relative",
        marginBottom:20
    },
    doubleQuote:{
        width:30,
        height:30,
        marginLeft : 20
    },
    section4_right_text_div_text:{
        textAlign:"justify",
        margin:10
    },
    section4_right_text_div:{
       marginLeft:30,
       marginRight:30
    },
    rating_div:{
        display:"flex",
        flexDirection:"row",
        marginTop: 8,
        marginBottom:5
    },
    user_name:{
        fontWeight:"bold",
        marginBottom:5
    },
    occupation_text:{
        fontSize:10
    }
  });