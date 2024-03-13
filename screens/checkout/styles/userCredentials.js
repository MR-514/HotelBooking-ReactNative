import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // form container styles
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 10,
    width: "100%",
    // borderWidth : 2,
  },
  // styles for form fields containers
  fieldContainer : {
    width : "100%"
  },
  // styles for labels
  formLabel: {
    fontSize: 16,
    margin: 10,
    color: "rgba(0, 0, 0, 0.7)",
  },
  // styles for id input
  idInput: {
    borderWidth: 1,
    padding: 8,
    color: "white",
    backgroundColor: "rgba(43, 39, 241, 0.707)",
    textAlign: "center",
    borderRadius: 5,
    width: "100%",
  },
  // styles for text input
  textInput: {
    borderWidth: 2,
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
});
