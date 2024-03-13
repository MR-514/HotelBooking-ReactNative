import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  scrollView: {
    marginTop:'3%',
  },
  scrollViewContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8
  },
  card: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '23%',
    marginRight:25,
    padding:'1%'
  },
  hotelImg: {
    position: 'relative',
  },
  locationBtn: {
    position: 'absolute',
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'black',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    
  },

  locationText: {
    color: 'white', 
    fontSize: 16,
    marginRight:'1%'
  },

  hotelName: {
    marginTop : 3,
    color: 'black',
  },
  figCaption: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  rate: {
    color: 'rgb(5, 156, 156)',
  },
  startingAt: {
    marginRight: 8,
  },
  rating: {
    color: 'black',
    marginRight: 5,
    flexDirection: 'row'
  }
});