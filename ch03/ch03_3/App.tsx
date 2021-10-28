import React from "react";
//prettier-ignore
import {StyleSheet, SafeAreaView} from 'react-native'

export default function App(){
  return<SafeAreaView style={styles.flex} />
}
const styles = StyleSheet.create({
  flex: {flex: 1}
})