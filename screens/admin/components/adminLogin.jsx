import { Alert, Switch, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import {styles} from "../admin-styles/admin.js";
import { useEffect, useState } from "react";
import Footer from "../../footer/components/footer.jsx";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default AdminLogin = ({navigation}) => {

    // setState to store the chaning email and password
    let [ adminCredentials, setAdminCredentials ] = useState({ email : "", password : "" });

    // state variable to hide and show the password
    const [showPassword, setShowPassword] = useState(false);

    // useeffect to store the admin credentials into asyncstorage
    useEffect(() => {
        var adminData = {
            email : "hotel.booking.admin@gmail.com",
            password : "admin@123"
        }
        AsyncStorage.setItem(
            'adminData',
            JSON.stringify(adminData),
        ); 
        // console.log('data inserted successfully', JSON.stringify(adminData));
    }, [])

    // method that gets invoked when the admin clicks upon login button
    const submitHandler = () => {

        console.log("submit handler invoked");

        // obtaining stored admin credentials from asyncstorage
        AsyncStorage.getItem('adminData')
        .then((data) => {
            console.log(JSON.parse(data));

            // obtaining the object containing the admin email and password
            let dataObject = JSON.parse(data);

            // admin email and password matching is done here
            if(adminCredentials.email.length!==0 && adminCredentials.password.length!==0){
                if(dataObject.email === adminCredentials.email && dataObject.password === adminCredentials.password ){
                    setAdminCredentials({ email : "", password : "" });
                    // console.log("logged in successfully");
                    navigation.navigate('AdminLanding');
                }
                else{
                    Alert.alert('Error', 'you have entered wrong credentials!',
                    [
                        {
                            text:'close',
                        }
                    ]);
                    setAdminCredentials({ email : "", password : "" });
                }
            }
            else{
                Alert.alert('Error', 'please fill all the credentials!',
                [
                    {
                        text:'close',
                    }
                ])
            }
        });
    }

    // method that gets invoked when the admin enters the email 
    const handleEmailChange = (data) => {
        setAdminCredentials({...adminCredentials, email : data});
    }

    // method that gets invoked when the admin enters the password 
    const handlePasswordChange = (data) => {
        setAdminCredentials({...adminCredentials, password : data});
    }

    // method to implement show and hide password to the user
    const toggleShowPassword = () => {
        setShowPassword (!showPassword);
    };

    return(
        <>
            <ScrollView>
                <KeyboardAvoidingView style={styles.main_container} behavior="padding" enabled keyboardVerticalOffset={50}>
                    <Image source={require('../../../assets/images/logo.png')} style={styles.logo}/>

                    {/* email field */}
                    <View style={styles.email_container}>
                        <TextInput placeholder="email" style={styles.email_field} value={adminCredentials.email} onChangeText={handleEmailChange}/>
                    </View>

                    {/* password field */}
                    <View style={styles.password_container}>
                        <TextInput secureTextEntry= {!showPassword} placeholder="password" value={adminCredentials.password} onChangeText={handlePasswordChange}/>
                        <MaterialCommunityIcons
                            name= {showPassword ? 'eye-off' : 'eye'}
                            size= {20}
                            color="#aaa"
                            style= {styles.icon}
                            onPress= {toggleShowPassword}
                        />
                    </View>

                    <Pressable style={styles.submit_button} onPress={submitHandler}>
                        <Text style={styles.submit_button_text}>Log in</Text>
                    </Pressable>
                </KeyboardAvoidingView>
            </ScrollView>
            <Footer navigation={navigation}/>
        </>
    )
}