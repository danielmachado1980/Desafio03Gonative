import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkTransparent,
    justifyContent: 'center',
    alignItems: 'stretch',
    flex: 1,
  },

  modal: {
    backgroundColor: colors.white,
    margin: metrics.baseMargin * 2,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darker,
  },

  input: {
    marginTop: metrics.baseMargin * 2,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius,
    alignSelf: 'stretch',
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    height: 40,
  },

  msgError: {
    color: colors.danger,
    fontWeight: 'bold',
    paddingHorizontal: metrics.basePadding,
    marginVertical: metrics.baseMargin,
  },

  buttonContainer: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: metrics.baseRadius,
    height: 42,
  },

  btnCancel: {
    backgroundColor: colors.cancel,
    marginRight: 7.5,
  },

  btnSave: {
    backgroundColor: colors.save,
    marginLeft: 7.5,
  },

  btnText: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 12,
  },
});

export default styles;
