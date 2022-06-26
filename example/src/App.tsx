import React, { useEffect } from 'react'
import RNProductsTableModule, { Counter } from 'react-native-products-table'

const App = () => {
  useEffect(() => {
    console.log(RNProductsTableModule)
  })

  return <Counter />
}

export default App
