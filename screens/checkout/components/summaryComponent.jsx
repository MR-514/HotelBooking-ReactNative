import { Text, View } from "react-native";
import { styles } from "../styles/summaryComponent";
import { useSelector } from "react-redux";

export default function SummaryComponent() {
  // getting details for checkin,chekout,and price from store
  const checkin = useSelector((store) => store.checkin);
  const checkout = useSelector((store) => store.checkout);
  const price = useSelector((store) => store.price);
  return (
    <>
      {/* booking summary component */}
      <View style={styles.summaryContainer}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Check-In</Text>
          {checkout ? (
            <Text>{checkin.toLocaleDateString()}</Text>
          ) : (
            <Text></Text>
          )}
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Check-Out</Text>
          {checkout ? (
            <Text>{checkout.toLocaleDateString()}</Text>
          ) : (
            <Text></Text>
          )}
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Total Amount</Text>
          <Text style={{ color: "green" }}>Rs {price}</Text>
        </View>
      </View>
    </>
  );
}
