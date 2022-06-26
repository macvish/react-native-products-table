import * as React from 'react'
import { ActivityIndicator, NativeModules, View } from 'react-native'

import NoProductsPlaceholder from './components/NoProductsPlaceholder'
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

export const ProductsTable: React.FC<Props> = ({
  isLoading,
  loaderColor,
  noProductNavigate,
  products,
}) => {
  const renderContent = () => {
    if (products.length > 0) {
      return <></>
    }

    return (
      <NoProductsPlaceholder
        onPress={() => noProductNavigate && noProductNavigate()}
      />
    )
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
