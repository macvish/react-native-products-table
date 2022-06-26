import { StyleSheet } from 'react-native'

import colors from '../../theme/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  title: {
    fontWeight: '500',
  },
})

export default styles
