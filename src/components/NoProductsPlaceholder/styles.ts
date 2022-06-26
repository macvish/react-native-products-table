import { StyleSheet } from 'react-native'

import metrics from '../../theme/metrics'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  textWrapper: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#928D8DE5',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#928D8D8A',
    width: metrics.screenWidth / 2,
    textAlign: 'center',
  },
  btn: {
    width: metrics.screenWidth / 2,
  },
})

export default styles
