import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/userCredentials";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as DocumentPicker from "expo-document-picker";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/roomQuantity.actions";

export default function UserCredentials() {
  const dispatch = useDispatch();
  // local state to store user data
  const [userCredentials, setUserCredentials] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    nationality: "IND",
    dateOfBirth: null,
    gender: "male",
    address: "",
  });
  // nations array
  const nationArr = [
    { code: "IND", name: "India" },
    { code: "USA", name: "USA" },
    { code: "CAN", name: "Canada" },
    { code: "GBR", name: "UK" },
    { code: "AUS", name: "Australia" },
    { code: "GER", name: "Germany" },
    { code: "FRA", name: "France" },
    { code: "ITA", name: "Italy" },
    { code: "JPN", name: "Japan" },
    { code: "BRA", name: "Brazil" },
    { code: "CHN", name: "China" },
    { code: "RUS", name: "Russia" },
    { code: "ZAF", name: "South Africa" },
    { code: "ARG", name: "Argentina" },
    { code: "MEX", name: "Mexico" },
    { code: "ESP", name: "Spain" },
    { code: "NED", name: "Netherlands" },
    { code: "SWE", name: "Sweden" },
    { code: "NOR", name: "Norway" },
    { code: "NZL", name: "New Zealand" },
    { code: "SGP", name: "Singapore" },
    { code: "KOR", name: "South Korea" },
    { code: "EGY", name: "Egypt" },
    { code: "NGA", name: "Nigeria" },
    { code: "SAU", name: "Saudi Arabia" },
  ];

  // Handling Email change
  const [emailError, setEmailError] = useState("");
  const handleEmailChange = (text) => {
    // // Check if the entered email is valid before updating the state
    const emailRegex = /^[A-Za-z|0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    setUserCredentials({ ...userCredentials, email: text });
    if (emailRegex.test(text)) {
      setEmailError("");
    } else {
      setEmailError("Invalid Email Format. Please enter a Valid Email");
    }
  };

  // function to handle upload
  const [pickedDocument, setPickedDocument] = useState(null);
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();

      if (!result.canceled && result.assets.length > 0) {
        setPickedDocument(result.assets[0].name);
      } else {
        setPickedDocument(null);
      }
    } catch (err) {
      // console.error("Error picking document", err);
      setPickedDocument(null);
    }
  };

  // to handle date of birth.
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    setShow(false);
    const currentDate = new Date();
    const minimumDate = new Date();
    // Subtract 10 years from the current date -- setting minDate 10 years in past
    minimumDate.setFullYear(currentDate.getFullYear() - 10);
    if (selectedDate < minimumDate) {
      setDate(selectedDate);
      setUserCredentials((prevState) => ({
        ...prevState,
        dateOfBirth: selectedDate,
      }));
    } else {
      Alert.alert(
        "Under Age",
        "You must be at least 10 years old to register here"
      );
      setUserCredentials((prevState) => ({
        ...prevState,
        dateOfBirth: null,
      }));
    }
  };
  const showDatePicker = () => {
    setShow(true);
  };
  //checks before updating store
  useEffect(() => {
    if (
      userCredentials.fullName &&
      userCredentials.email &&
      userCredentials.dateOfBirth &&
      userCredentials.gender &&
      userCredentials.mobileNumber &&
      userCredentials.nationality
    ) {
      dispatch(addUser(userCredentials));
    }
  }, [userCredentials, dispatch]);
  return (
    <View style={styles.formContainer}>
      {/* id container */}
      <View style={styles.fieldContainer}>
        <Text style={styles.formLabel}>
          {" "}
          Upload your Id <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TouchableOpacity onPress={pickDocument}>
          <Text style={styles.textInput}>
            {pickedDocument ? <Text>{pickedDocument} </Text>: <Text style={{fontWeight : "bold"}}>Select File :</Text>}
          </Text>
        </TouchableOpacity>
      </View>
      {/* full name */}
      <View>
        <Text style={styles.formLabel}>
          {" "}
          Full Name <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          onChangeText={(value) =>
            setUserCredentials({ ...userCredentials, fullName: value })
          }
          value={userCredentials.fullName}
          style={styles.textInput}
        />
      </View>
      {/* email Container */}
      <View>
        <Text style={styles.formLabel}>
          {" "}
          Email Address <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          onChangeText={(value) =>
            setUserCredentials({ ...userCredentials, email: value })
          }
          onBlur={() => handleEmailChange(userCredentials.email)}
          value={userCredentials.email}
          style={styles.textInput}
        ></TextInput>
        {emailError ? (
          <Text style={{ color: "red" }}>*{emailError}</Text>
        ) : null}
      </View>
      {/* mobile number Container */}
      <View>
        <Text style={styles.formLabel}>
          Mobile Number <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          onChangeText={(value) =>
            setUserCredentials({ ...userCredentials, mobileNumber: value })
          }
          value={userCredentials.mobileNumber}
          keyboardType="numeric"
          style={styles.textInput}
        />
      </View>
      {/* nationality container */}
      <View>
        <Text style={styles.formLabel}>
          Nationality <Text style={{ color: "red" }}>*</Text>
        </Text>

        <Picker
          selectedValue={userCredentials.nationality}
          onValueChange={(value) =>
            setUserCredentials({ ...userCredentials, nationality: value })
          }
          mode="dropdown"
        >
          {nationArr.map((nation) => (
            <Picker.Item
              key={nation.code}
              label={nation.name}
              value={nation.code}
            />
          ))}
        </Picker>
      </View>
      {/* date of birth container */}
      <View>
        <Text style={styles.formLabel}>
          Date of Birth <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TouchableOpacity style={styles.textInput} onPress={showDatePicker}>
          {userCredentials.dateOfBirth ? (
            <Text>{userCredentials.dateOfBirth.toLocaleDateString()}</Text>
          ) : (
            <Text>Choose Date</Text>
          )}
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>
      {/* gender container */}
      <View>
        <Text style={styles.formLabel}>
          Select Gender <Text style={{ color: "red" }}>*</Text>
        </Text>
        <Picker
          selectedValue={userCredentials.gender}
          onValueChange={(value) =>
            setUserCredentials({ ...userCredentials, gender: value })
          }
          mode="dropdown"
          style={{ color: "black" }}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      {/* address container */}
      <View>
        <Text style={styles.formLabel}>Address</Text>
        <TextInput
          onChangeText={(value) =>
            setUserCredentials({ ...userCredentials, address: value })
          }
          value={userCredentials.address}
          style={[styles.textInput, { height: 100, borderWidth: 1 }]}
        ></TextInput>
      </View>
    </View>
  );
}
