import React from 'react'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import colors from '../../theme/colors'
import styles from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title?: string
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  style,
  title,
  ...props
}) => {
  return (
    <TouchableOpacity {...props} style={[styles.container, style]}>
      {loading ? (
        <ActivityIndicator size='small' color={colors.primary} />
      ) : title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

export default Button
