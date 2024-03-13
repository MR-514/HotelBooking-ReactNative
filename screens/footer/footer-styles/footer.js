import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    popup_container:{
        backgroundColor:"black",
        height:"100%",
        widht:"100%"
    },
    logo:{
        width:162,
        height:50
    },
    image_container:{
        alignItems:"center",
        justifyContent:"center",
        margin:20
    },
    additional_info_text:{
        color:"rgb(79, 150, 150)",
        // color:"white",
        margin:20
    },
    sub_container:{
        margin:20
    },
    sub_heading:{
        color:"white",
        fontSize:20,
        borderBottomColor:"white",
        borderBottomWidth:StyleSheet.hairlineWidth
    },
    icons_text_container:{
        display:"flex",
        flexDirection:"row",
        gap:5,
        marginTop:10,
        marginLeft:10
    },
    phone_and_email_text:{
        color:"rgb(79, 150, 150)"
    },
    icons:{
        display:"flex",
        flexDirection:"row",
        margin:10,
        gap:15
    },
    close_button_container:{
        margin:10
    }
})