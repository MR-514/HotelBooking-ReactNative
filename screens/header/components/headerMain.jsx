import React from 'react';
import { View, Image } from 'react-native';

export default HeaderComp = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 8 }}>
      <Image
        style={{ width: 120, height: 50 }}
        source={require('../../../assets/images/logo.jpg')} 
        resizeMode="contain"
      />
      <Image
        style={{ width: 50, height: 50, borderRadius: 15 }}
        source={require('../../../assets/images/01.jpg')} 
        resizeMode="cover"
      />
    </View>
  );
};
