import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'

import Button from '../Button'
import styles from './styles'

interface Props {
  onPress?: () => void
  buttonStyle?: StyleProp<ViewStyle>
}

const NoProductPlaceholder: React.FC<Props> = ({ buttonStyle, onPress }) => {
  return (
    <View style={styles.container}>
      {/* <NoProductIcon /> */}
      <View style={{ paddingVertical: 20 }}>
        <Text style={styles.title}>No Products Yet</Text>
        <Text style={styles.subtitle}>
          You don't have any product at the moment.
        </Text>
      </View>
      <Button
        title='+ Add Product'
        style={[styles.btn, buttonStyle]}
        onPress={onPress}
      />
    </View>
  )
}

export default NoProductPlaceholder
