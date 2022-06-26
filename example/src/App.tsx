import React, { useEffect } from 'react'
import RNProductsTableModule, { ProductsTable } from 'react-native-products-table'

const dummyData = [{
  title: 'Test',
  imageSource: '',
  category: 'Electronics',
  amount: '9000',
  quantity: 20
}]

const App = () => {
  useEffect(() => {
    console.log(RNProductsTableModule)
  })

  return <ProductsTable products={dummyData}/>
}

export default App
