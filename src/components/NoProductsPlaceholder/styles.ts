import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
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
    width: width / 2,
    textAlign: 'center',
  },
  btn: {
    width: width / 2,
  },
})

export default styles
