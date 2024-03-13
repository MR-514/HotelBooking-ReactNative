import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/traveller";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function Traveller({ id, removeTraveller }) {
  // local state to store travellers detail - not saved anywhere
  const [travellerDetails, setTravellerDetails] = useState({
    fullname: "",
    dob: null,
  });
  const currentDate = new Date();
  // state to manage the date picker visibility
  const [show, setShow] = useState(false);

  // function to handle dateChange
  const onChangeDate = (event, selectedDate) => {
    setShow(false);
    if (selectedDate > currentDate) {
      // setDate(selectedDate);
      Alert.alert("Invalid Date", "Choosen date cannot be from future.");
    } else {
      setTravellerDetails({ ...travellerDetails, dob: selectedDate });
    }
  };
  const showDatePicker = () => {
    setShow(true);
  };
  // function to remove traveller on click of remove button.
  const handleRemove = () => {
    removeTraveller(id);
  };

  return (
    <View style={styles.travellerContainer}>
      <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
        <Text style={{ color: "rgba(43,39,241,0.777)" }}>Remove</Text>
      </TouchableOpacity>
      <Text style={styles.formLabel}>Full Name</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text style={styles.formLabel}>Date of Birth</Text>
      <TouchableOpacity style={styles.textInput} onPress={showDatePicker}>
        {travellerDetails.dob ? (
          <Text>{travellerDetails.dob.toLocaleDateString()}</Text>
        ) : (
          <Text>Choose Date</Text>
        )}
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={currentDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
}
