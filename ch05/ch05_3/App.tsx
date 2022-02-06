import React, {useState} from 'react'
import { BottomNavigation } from 'react-native-paper'
import Themed from './Themed'
import Imperactive from './Imperactive'

export default function Main() {
  const [index, setIndex] = useState<number>(0)
  const [routes] = useState([
    {key: 'themed', title: 'Themed', icon: 'home'},
    {key: 'imperative', title: 'Imperactive', icon: 'keyboard-settings'}
  ])

  const renderScene = BottomNavigation.SceneMap({
    themed: Themed,
    imperactive: Imperactive
  })

  return (
    <BottomNavigation 
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}