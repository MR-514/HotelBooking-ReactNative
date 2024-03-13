

import { ScrollView, StatusBar, Text, View } from "react-native";
import SectionOneComp from './sectionOneComp';
import Section2 from "./section2.jsx";
import { TestimonialMain } from "./testimonialMain";
import ParentComponent from "./section3ParentComp";
import Footer from "../../footer/components/footer.jsx";

export default HomeScreen = ({navigation}) => {
  const statusBarHeight = StatusBar.currentHeight;

    return (
      <>
        <ScrollView style={{ marginTop: statusBarHeight }}>
          <SectionOneComp navigation={navigation} />
          <Section2 />
          <ParentComponent navigation={navigation} />
          <TestimonialMain />
        </ScrollView>
        <Footer navigation={navigation} />
      </>
    );

};
