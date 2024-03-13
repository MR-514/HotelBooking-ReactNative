import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "../homePage-styles/section2";
import { ShieldCheck, Star, Timer, Utensils, Zap } from "lucide-react-native";

const image1 = require("../../../assets/images/01(1).jpg");

export default function Section2() {
  return (
    <ScrollView>
      <View style={styles.section2_main_container}>
        <View>
          <Image source={image1} style={styles.adImage} />
        </View>
        {/* container containing rating display information */}
        <View style={styles.likesDisplay}>
          <View style={styles.ratingDisplayHeadings}>
            <Text style={styles.headding3}>Client</Text>
            <Text style={styles.headding3}>Rating</Text>
          </View>
          <View style={styles.ratingDisplayContent}>
            {/* container containing images of clients in rating display */}
            <View style={styles.clientImages}>
              <Image
                style={[styles.clientImageStyles, { top: 0, left: 0, zIndex: 1 }]}
                source={require("../../../assets/images/01.jpg")}
              />
              <Image
                style={[
                  styles.clientImageStyles,
                  { top: 0, left: 40, zIndex: 2 },
                ]}
                source={require("../../../assets/images/02.jpg")}
              />
              <Image
                style={[
                  styles.clientImageStyles,
                  { top: 0, left: 80, zIndex: 3 },
                ]}
                source={require("../../../assets/images/03.jpg")}
              />
              <Image
                style={[
                  styles.clientImageStyles,
                  { top: 0, left: 120, zIndex: 3 },
                ]}
                source={require("../../../assets/images/04.jpg")}
              />
            </View>
            <View>
              <Text style={styles.headding2}>
                4.5
                <Star fill="yellow" />
              </Text>
            </View>
          </View>
        </View>
        {/* container containing the content - like some of highlighted services  */}
        <View>
          <Text style={[{ fontWeight: "bold" }, styles.heading1]}>
            The Best Holidays Start Here
          </Text>
          <Text style={styles.parah}>
            Book your hotel with us and don't forget to grab an awesome hotel
            deals to save a massive on your stay.
          </Text>
          <View style={styles.commonServicesContainer}>
            <View style={styles.commonServices}>
              <View
                style={[
                  { backgroundColor: "rgba(51, 225, 222, 0.2)" },
                  styles.iconContainer,
                ]}
              >
                <Utensils color="rgb(51, 225, 222)" />
              </View>
              <Text style={styles.headding3}> Quality Food</Text>
            </View>
            <Text style={styles.parah}>
              Departure defective arranging rapturous did. Conduct denied adding
              worthy little.
            </Text>

            <View style={styles.commonServices}>
              <View
                style={[
                  { backgroundColor: "rgba(223, 58, 82, 0.2)" },
                  styles.iconContainer,
                ]}
              >
                <Timer color="rgb(223, 58, 82)" />
              </View>
              <Text style={styles.headding3}> Quick services</Text>
            </View>
            <Text style={styles.parah}>
              Supposing so be resolving breakfast am or perfectly.
            </Text>

            <View style={styles.commonServices}>
              <View
                style={[
                  { backgroundColor: "rgba(226, 81, 3, 0.2)" },
                  styles.iconContainer,
                ]}
              >
                <ShieldCheck color="rgb(226, 81, 3)" />
              </View>
              <Text style={styles.headding3}> High Security</Text>
            </View>
            <Text style={styles.parah}>
              Arranging rapturous did believe him all had supported.
            </Text>

            <View style={styles.commonServices}>
              <View
                style={[
                  { backgroundColor: "rgba(48, 253, 185, 0.2)" },
                  styles.iconContainer,
                ]}
              >
                <Zap fill="rgb(48, 253, 185)" />
              </View>
              <Text style={styles.headding3}> 24 Hours Alert</Text>
            </View>
            <Text style={styles.parah}>
              Rapturous did believe him all had supported.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
