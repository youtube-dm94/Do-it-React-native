import React from 'react'
import { SafeAreaView, Text } from 'react-native'

export default function App() {
  /* Difference between React.createElement & JSX */ 
  /* USING IF */
  // const isLoading = true
  // if (isLoading) {
  //   return (
  //     <SafeAreaView>
  //       <Text>Loading...</Text>
  //     </SafeAreaView>
  //   )
  // }
  // return (
  //   <SafeAreaView>
  //     <Text>Hello JSC world!</Text>
  //   </SafeAreaView>
  // )
  
  /* SHORT CIRCULT EVALUATION */
  // const isLoading = true
  // return (
  //   <SafeAreaView>
  //     {isLoading && <Text>Loading...</Text>}
  //     {!isLoading && <Text>Hello JSX world!</Text>}
  //   </SafeAreaView>
  // )

  /* Using variable */
  // const isLoading = true
  // const children = isLoading ? (
  //   <Text>Loading...</Text>
  // ) : (
  //   <Text>Hello JSX World!</Text>
  // )
  // return <SafeAreaView>{children}</SafeAreaView>

  // ARRAY
  /* How can we improve code below? */ 

  // const child = [
  //   <Text>Hello World!</Text>,
  //   <Text>Hello World!</Text>,
  //   <Text>Hello World!</Text>
  // ]
  // return <SafeAreaView>{child}</SafeAreaView>

  /* map method */
  // const children = [1,2,3].map((i) => <Text>Hello World!{i}</Text>)
  // return <SafeAreaView>{children, newComponent}</SafeAreaView>
  
  const newComponent = new Array(100)
    .fill(null)
    .map((notUsed, index) => <Text>Hello World!{index}</Text>)

  return <SafeAreaView>{newComponent}</SafeAreaView>
}