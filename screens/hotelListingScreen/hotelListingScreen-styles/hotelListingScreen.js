import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    hotel_list_maincontainer:{
        display:"flex",
        flexDirection:"column",
        marginLeft:10,
        marginBottom:5,
        marginTop:20,
        marginRight:10,
        backgroundColor:"aliceblue",
        borderRadius:10
    },
    hotel_list_imagecontainer:{
        marginTop:20,
        // marginLeft:20,
        // marginRight:20,
        alignItems:"center",
        justifyContent:"center",
    },
    hotel_list_image:{
        borderRadius:10
    },
    hotel_list_textcontainer:{
        margin:20
    },
    user_ratings:{
        display:"flex",
        flexDirection:"row",
        marginBottom:10
    },
    hotel_name:{
        marginBottom:10,
        fontSize:20,
        fontWeight:"bold"
    },
    location_section:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        gap:5
    },
    location:{
        color:"rgb(117, 116, 116)",
        textAlign:"justify"
    },
    facilities_section:{
        marginTop:10,
        display:"flex",
        flexDirection:"row",
        gap:10,
        marginBottom:10
    },
    facilities:{
        color:"rgb(117, 116, 116)",
        fontSize:12
    },
    additional_info_section:{
        display:"flex",
        flexDirection:"column",
        marginBottom:20
    },
    additionalInfo_sub_sections:{
        display:"flex",
        flexDirection:"row",
        gap:5
    },
    additionalInfo_text:{
        fontSize:12
    },
    hotel_price_section:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    select_rooms_button:{
        width:100,
        backgroundColor:"rgb(117, 116, 116)",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        padding:6
    },
    select_rooms_text:{
        color:"white",
    },
    hotel_price:{
        display:"flex",
        flexDirection:"row",
        gap:5
    },
    hotel_price_text:{
        fontWeight:"bold",
        fontSize:20
    },
    additional_facilities_content:{
        display:"flex",
        flexDirection:"row",
        gap:5
    },
    popup_container:{
        margin:20
    },
    detailed_description:{
        textAlign:"justify",
        marginBottom:10
    },
    additional_features_container:{
        marginBottom:10
    },
    toggle_button_container:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:'center',
        margin:20,
        gap:5
    },
    toggle_buttons:{
        borderRadius:3,
        padding:10,
        backgroundColor:"rgb(216, 204, 189)",
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'end',
      },
      container: {
        flexDirection: 'row',  
        alignItems: 'center',   
        paddingHorizontal: 10,
      },
      textContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        borderRadius: 45,
        backgroundColor: 'white',
        borderColor:'black',
        borderWidth:1,
        color: 'black',
        margin:2,
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      no_data_text:{
        textAlign:"center",
        margin:20
      }
})