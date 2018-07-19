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

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -27.2177659,
        longitude: -49.6451598,
        latitudeDelta: 0.0042,
        longitudeDelta: 0.0031,
      },
      modalVisible: false,
      regionClicked: null,
    };
  }

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
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsPointsOfInterest={false}
          showBuildings={false}
          style={styles.map}
          region={this.state.region}
          initialRegion={this.state.region}
          onLongPress={this.onMapLongPress}
        >
          {this.props.markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
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
