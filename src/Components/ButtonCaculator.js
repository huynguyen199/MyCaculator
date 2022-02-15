import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import React from "react"

const ButtonCaculator = ({ value, onPress, style, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.container]}>
      <View>
        <Text style={{ fontSize: 40, color: textColor }}>{value}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default ButtonCaculator
