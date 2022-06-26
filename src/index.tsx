import * as React from 'react'
import {
  ActivityIndicator,
  Button,
  NativeModules,
  Text,
  View,
} from 'react-native'

import styles from './styles'
import { Products } from './types'

interface Props {
  products: Products[]
  noProductNavigate?: () => void
  onSearch?: (value?: string) => void
  onSort?: (value?: string) => void
  onFilter?: (value?: string) => void
  isLoading?: boolean
  // categories?: CategoryData[]
  loaderColor?: string
}

export const ProductsTable: React.FC<Props> = ({ isLoading, loaderColor }) => {
  const renderContent = () => {
    return <Text>Here</Text>
  }

  const onLoading = () => {
    if (isLoading) {
      return (
        <View style={styles.LoadingWrapper}>
          <ActivityIndicator color={loaderColor} size={30} />
        </View>
      )
    }

    return renderContent()
  }
  return <View style={styles.container}>{onLoading()}</View>
}

export default NativeModules.RNProductsTableModule
