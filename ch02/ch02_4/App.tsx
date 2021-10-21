import React, { Children } from 'react'
import { SafeAreaView, Alert, Button } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <Button title = 'Home'
        onPress={() => Alert.alert('home pressed.', 'message')} />
    </SafeAreaView>
  )
}