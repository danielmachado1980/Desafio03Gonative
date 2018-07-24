import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MarkerActions } from 'store/ducks/markings';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';
import Modal from './components/modal';

class Main extends Component {
  static propTypes = {
    addMarkingRequest: PropTypes.func.isRequired,
    markers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      user: PropTypes.string,
      description: PropTypes.string,
      coordinate: PropTypes.shape({
        longitude: PropTypes.number,
        latitude: PropTypes.number,
      }),
    })).isRequired,
    errorMsg: PropTypes.string,
  };

  static defaultProps = {
    errorMsg: null,
  };

  state = {
    region: {
      latitude: -27.2177659,
      longitude: -49.6451598,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    },
    modalVisible: false,
    regionClicked: null,
    points: [
      {
        "id": 2254731,
        "avatar": "https://avatars2.githubusercontent.com/u/2254731?v=4",
        "user": "diego3g",
        "description": "CTO na @RocketSeat. Apaixonado por Javascript, ReactJS, React Native, Redux, NodeJS e todo ecossistema em torno dessas tecnologias.",
        "coordinate": {
          "longitude": -49.64800000190735,
          "latitude": -27.218351409490964
        }
      },
      {
        "id": 6250232,
        "avatar": "https://avatars1.githubusercontent.com/u/6250232?v=4",
        "user": "danielmachado1980",
        "description": "Systems Analyst in Bauru-SP, Brazil.",
        "coordinate": {
          "longitude": -49.64805196970702,
          "latitude": -27.21854013889851
        }
      },
      {
        "id": 2254732,
        "avatar": "https://avatars2.githubusercontent.com/u/2254731?v=4",
        "user": "diego3g",
        "description": "CTO na @RocketSeat. Apaixonado por Javascript, ReactJS, React Native, Redux, NodeJS e todo ecossistema em torno dessas tecnologias.",
        "coordinate": {
          "longitude": -49.64700000190735,
          "latitude": -27.218351409490964
        }
      },
    ],
  };

  onMapLongPress = (e) => {
    this.setState({ modalVisible: true, regionClicked: e.nativeEvent.coordinate });
  }

  addMarkers = async (e) => {
    if (!e) return;
    const { regionClicked } = this.state;
    this.props.addMarkingRequest({ user: e, regionClicked });

    if (this.props.errorMsg === null) this.setState({ modalVisible: false });
  }

  render() {
    console.tron.log(this.state.points);
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsPointsOfInterest
          showBuildings={false}
          style={styles.map}
          region={this.state.region}
          initialRegion={this.state.region}
          onLongPress={this.onMapLongPress}
        >
          { this.state.points.map(marker => (
            <Marker
              key={String(marker.id)}
              coordinate={{
                latitude: marker.coordinate.latitude,
                longitude: marker.coordinate.longitude,
                latitudeDelta: 0.0042,
                longitudeDelta: 0.0031,
              }}
            >
              <Image
                style={styles.marker}
                source={{ uri: marker.avatar }}
              />
              <Callout>
                <View style={styles.tooltip}>
                  <Text style={styles.tooltipTitle}>{marker.user}</Text>
                  <Text>{marker.description}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
          { this.props.markers.map(marker => (
            <Marker
              key={String(marker.id)}
              coordinate={{
                latitude: marker.coordinate.latitude,
                longitude: marker.coordinate.longitude,
                latitudeDelta: 0.0042,
                longitudeDelta: 0.0031,
              }}
            >
              <Image
                style={styles.marker}
                source={{ uri: marker.avatar }}
              />
              <Callout>
                <View style={styles.tooltip}>
                  <Text style={styles.tooltipTitle}>{marker.user}</Text>
                  <Text>{marker.description}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
        {this.state.modalVisible
        ? <Modal
          OnCancel={() => this.setState({ modalVisible: false })}
          OnAdd={this.addMarkers}
          visible
        />
        : null }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markings.mapMarkings,
  errorMsg: state.markings.errorOnAdd,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MarkerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
