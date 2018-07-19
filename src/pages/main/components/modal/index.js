import React, { Component } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MarkerActions } from 'store/ducks/markings';

import styles from './styles';

class modal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    OnCancel: PropTypes.func.isRequired,
    OnAdd: PropTypes.func.isRequired,
    errorMsg: PropTypes.string,
  };

  static defaultProps = {
    errorMsg: null,
  };

  state = {
    inputText: '',
  };

  render() {
    return (
      <View>
        <Modal animationType="fade" transparent visible={this.props.visible} onRequestClose={() => {}}>
          <View style={styles.container}>
            <View style={styles.modal}>
              <Text style={styles.title}>Adicionar novo local</Text>
              <TextInput
                placeholder="Usuário no GitHub"
                style={styles.input}
                underlineColorAndroid="rgba(0,0,0,0)"
                onChangeText={inputText => this.setState({ inputText })}
                autoCapitalize="none"
              />
              {this.props.errorMsg
                ? <Text style={styles.msgError}>{this.props.errorMsg}</Text>
                : null }
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.btnCancel]}
                  onPress={this.props.OnCancel}
                >
                  <Text style={styles.btnText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.btnSave]}
                  onPress={() => this.props.OnAdd(this.state.inputText)}
                >
                  <Text style={styles.btnText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  errorMsg: state.markings.errorOnAdd,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MarkerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(modal);
