import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  marker: {
    width: 32,
    height: 32,
    borderWidth: 5,
    borderColor: colors.white,
    borderRadius: 32,
  },

  tooltip: {
    width: metrics.screenWidth - (metrics.baseMargin * 6),
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },

  tooltipTitle: {
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
  },
});

export default styles;
