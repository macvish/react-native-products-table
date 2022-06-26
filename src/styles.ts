import { StyleSheet } from 'react-native'

import { shadowBox } from './lib/helpers'
import colors from './theme/colors'
import metrics from './theme/metrics'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  headerWrapper: {
    flexDirection: 'row',
  },
  sortWrapper: {
    backgroundColor: '#ECEEF1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: metrics.screenWidth / 9.5,
    borderRadius: 3,
  },
  label: {
    color: '#7B7B7B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productItem: {
    ...shadowBox,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: 20,
    borderRadius: 3,
    elevation: 1,
  },
  productItemLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  LoadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  marginRight: {
    marginRight: 10,
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  quantity: {
    color: colors.placeholderText,
    textAlign: 'right',
  },
})

export default styles
