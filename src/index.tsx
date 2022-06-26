import * as React from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  NativeModules,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import NoProductsPlaceholder from './components/NoProductsPlaceholder'
import { trimText } from './lib/helpers'
import styles from './styles'
import colors from './theme/colors'
import { Products } from './types'

interface Props {
  products: Products[]
  label?: string
  noLabel?: boolean
  onPressProduct?: (item: Products) => void
  noProductNavigate?: () => void
  onSearch?: (value?: string) => void
  onSort?: (value?: string) => void
  onFilter?: (value?: string) => void
  isLoading?: boolean
  // categories?: CategoryData[]
  loaderColor?: string
}

type RenderProductItemType = { item: Products; index: number }

export const ProductsTable: React.FC<Props> = ({
  isLoading,
  label,
  loaderColor,
  noLabel,
  noProductNavigate,
  onPressProduct,
  products,
}) => {
  const [data, setData] = React.useState(products)

  const renderProductItem = ({ item, index }: RenderProductItemType) => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => onPressProduct && onPressProduct(item)}
      >
        <View style={styles.productItem} key={index}>
          <View style={styles.productItemLeftContent}>
            {/* <Icon
              name='eye-outline'
              size={20}
              color='#ADB4BD'
              style={styles.marginRight}
            /> */}
            {item.imageSource ? (
              <Image
                source={{ uri: item.imageSource }}
                style={styles.productImage}
              />
            ) : null}
            <View>
              <Text style={styles.bold}>{trimText(item?.title, 20)}</Text>
              {item?.category ? (
                <Text style={{ color: colors.placeholderText }}>
                  {item?.category}
                </Text>
              ) : null}
            </View>
          </View>
          <View>
            {item?.amount ? (
              <Text style={styles.amount}>{item?.amount}</Text>
            ) : null}
            {item?.quantity ? (
              <Text style={styles.quantity}>{item?.quantity}pcs</Text>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const renderContent = () => {
    if (products.length > 0) {
      return (
        <>
          <View style={styles.headerWrapper}>
            <></>
          </View>
          {noLabel ? null : (
            <Text style={styles.label}>{label ?? 'Products'}</Text>
          )}
          <FlatList
            data={data}
            renderItem={renderProductItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )
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

  React.useEffect(() => setData(products), [products])

  return <View style={styles.container}>{onLoading()}</View>
}

export default NativeModules.RNProductsTableModule
