import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //Common styles across roomOverview ------- start ------------------
  heading1: {
    fontSize: 30,
    margin: 8,
    fontWeight: "bold",
  },
  heading3: {
    fontSize: 24,
    margin: 8,
    fontWeight: "bold",
  },
  parah: {
    fontSize: 16,
    margin: 8,
    textAlign : "justify"
  },
  //Common styles across roomOverview ------- end ------------------

  // styles from container containing room images
  roomImageContainer: {
    height: 360,
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  // styles for enlarged image
  enlargedImageStyles: {
    borderRadius: 20,
    width: "95%",
    height: 360,
  },

  // styles for smaller images container
  smallImagesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    top: 280,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 10,
  },
  // styles for small images
  smallImageStyles: {
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 5,
  },

  iconsMainContainer: {
    display: "flex",
    flexDirection: "column",
  },
  //styles for Icon Container
  iconsContainer: {
    margin: 8,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  icons: {
    color: "rgba(43,39,241,0.777)",
    borderRadius: 5,
    backgroundColor: "rgba(192, 192, 192, 0.4)",
  },

  // styles for room quantity selector button
  roomQuantitySelectorContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(43,39,241,0.777)",
    padding: 5,
    borderRadius : 5,
    width : "100%"
  },
  roomSelectorButton: {
    paddingLeft: 20,
  },
  quantityDisplay: {
    paddingLeft: 20,
    color: "white",
  },
});
