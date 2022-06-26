import React from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'

import Button from '../Button'
import styles from './styles'

interface Props {
  title?: string
  subtitle?: string
  onPress?: () => void
  buttonStyle?: StyleProp<ViewStyle>
}

const NoProductsPlaceholder: React.FC<Props> = ({
  buttonStyle,
  onPress,
  subtitle,
  title,
}) => {
  return (
    <View style={styles.container}>
      {/* <NoProductIcon /> */}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title ?? 'No Products Yet'}</Text>
        <Text style={styles.subtitle}>
          {subtitle ?? "You don't have any product at the moment."}
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

export default NoProductsPlaceholder
