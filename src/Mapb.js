import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoiZGFuaWVsbWFjaGFkbyIsImEiOiJjamprN2V5b3UwMWtzM3JxcDlyYzN5ZXF0In0.zS8ILTDK_Vzwbw6hSwpl8w');


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Mapb = () => (
  <View style={styles.container}>
    <Mapbox.MapView
      styleURL={Mapbox.StyleURL.Street}
      zoomLevel={15}
      centerCoordinate={[11.256, 43.770]}
      style={styles.container}
    />
  </View>
);

export default Mapb;

