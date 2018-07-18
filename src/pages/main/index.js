import React, { Component } from 'react';
import { View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import Modal from './components/modal';
import styles from './styles';

MapboxGL.setAccessToken('pk.eyJ1IjoiaGlnb3JvY2tldCIsImEiOiJjamlrdWJuY3gyaHYxM3Bvbmg0cGRwY3R0In0._TdjX9rYrjZ6Q6FFXOGwsQ');

export default class Main extends Component {
  addMarkers = async (e) => {

  }

  renderAnnotations = () => (
    <MapboxGL.PointAnnotation
      id="rocketseat"
      coordinate={[-49.6451598, -27.2177659]}
    >
      <View style={styles.annotationContainer}>
        <View style={styles.annotationFill} />
      </View>
      <MapboxGL.Callout title="Rocketseat House" />
    </MapboxGL.PointAnnotation>
  )

  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          centerCoordinate={[-49.6451598, -27.2177659]}
          style={styles.container}
          showUserLocation
          styleURL={MapboxGL.StyleURL.Dark}
        >
          {this.renderAnnotations()}
        </MapboxGL.MapView>
        <Modal
          OnCancel={() => {}}
          OnAdd={this.addMarkers}
          visible
        />
      </View>
    );
  }
}

