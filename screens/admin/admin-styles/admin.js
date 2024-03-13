import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    main_container:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop:100
    },
    logo:{
        // width:"87%",
        // height:"61%"
        width:162,
        height:50
    },
    email_field:{
        height:40,
        borderWidth:1,
        padding:10,
        width:280,
        borderRadius:5
    },
    email_container:{
        margin:20
    },
    password_container:{
        display:"flex",
        flexDirection:"row",
        margin:10,
        height:40,
        borderWidth:1,
        padding:10,
        width:280,
        borderRadius:5,
        justifyContent:"space-between"
    },
    submit_button:{
        width:280,
        backgroundColor:"blue",
        borderRadius:5,
        padding:5
    },
    submit_button_text:{
        textAlign:"center",
        color:"white"
    },

    admin_landing_main_container:{
        display:"flex",
        flexDirection:"column",
    },
    details_container:{
        display:"flex",
        flexDirection:"column",
        marginLeft:10,
        marginBottom:10,
        marginTop:20,
        marginRight:10,
        backgroundColor:"aliceblue",
        borderRadius:10,
        borderWidth:1,
        padding:5
    },
    booking_text1:{
        // borderBottomColor: 'rgb(186, 182, 182)',
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // padding:10,
        // color:"rgb(142, 138, 138)"
        margin:10
    },
    booking_text2:{
        // borderBottomColor: 'rgb(186, 182, 182)',
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // padding:10,
        color:"rgb(142, 138, 138)"
    },
    booking_text3:{
        // borderBottomColor: 'rgb(186, 182, 182)',
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // padding:10,
        color:"rgb(142, 138, 138)",
        fontSize:12
    },
    booking_text4:{
        // borderBottomColor: 'rgb(186, 182, 182)',
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // padding:10,
        color:"rgb(142, 138, 138)",
        fontSize:12
    },
    booking_text5:{
        color:"rgb(142, 138, 138)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        
    },
    booking_text6:{
        // padding:10,
        // color:"rgb(142, 138, 138)"
        padding:10
    },
    dates_container:{
        color:"rgb(142, 138, 138)",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }
})