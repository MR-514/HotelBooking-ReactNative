import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section2_main_container:{
    marginLeft:10,
    marginRight:10,
  },
  //Common styles across section 2 ------- start ------------------
  heading1: {
    fontSize: 32,
    margin: 16,
  },
  headding2: {
    fontSize: 28,
    margin: 12,
  },
  headding3: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
  },
  parah: {
    fontSize: 16,
    margin: 8,
  },
  //Common styles across section 2 ------- end ------------------

  // image of hotel having rating display on top of it.
  adImage: {
    position: "relative",
    width: "100%",
    height: 300,
  },

  // styles for client ratings display. ---------start
  likesDisplay: {
    position: "absolute",
    backgroundColor: "rgba(240, 248, 255, 0.8)",
    width: "85%",
    height: 110,
    alignSelf : "center",
    top: 160,
    margin:20,
    borderRadius: 10,
  },

  ratingDisplayHeadings: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight:10,
  },

  ratingDisplayContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // styles for images container within rating display
  clientImages: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    marginLeft: 20,
  },

  // styles for images within rating display
  clientImageStyles: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
  },
  // styles for client ratings display. ---------end

  // styles for common services container listed in section2 ---------start--------
  commonServicesContainer: {
    margin: 15,
  },
  commonServices: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  // styles for container containing icons
  iconContainer: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  // styles for common services container listed in section2 ---------End--------
});
