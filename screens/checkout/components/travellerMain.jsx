import { Text, TouchableOpacity, View } from "react-native";
import Traveller from "./traveller";
import { styles } from "../styles/travellerMain";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseTravellerCount,
  decreaseTravellerCount,
} from "../redux/actions/roomQuantity.actions";

export default function TravellerMain() {
  const dispatch = useDispatch();

  // state to manage travellers
  const [travellers, setTravellers] = useState([]);

  // function to handle addition of travellers and assingning a unique id to same.
  const addTraveller = () => {
    setTravellers([...travellers, { id: Date.now() }]);
    dispatch(increaseTravellerCount());
  };
  // function to remove traveller based on id received.
  const removeTraveller = (id) => {
    setTravellers(travellers.filter((traveller) => traveller.id !== id));
    dispatch(decreaseTravellerCount());
  };

  return (
    <View>
      <Text style={styles.heading}>Travelers Detail</Text>
      <TouchableOpacity
        style={styles.addTravellerButton}
        onPress={addTraveller}
      >
        <Text style={{ color: "white" }}> + Add New Traveller</Text>
      </TouchableOpacity>
      {travellers.map((traveller) => (
        <Traveller
          key={traveller.id}
          id={traveller.id}
          removeTraveller={removeTraveller}
        />
      ))}
    </View>
  );
}
