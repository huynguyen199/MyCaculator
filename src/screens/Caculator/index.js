/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-eval */
import { View, Text, Animated, TouchableOpacity, StyleSheet } from "react-native"
import React, { useState, useRef } from "react"
import ContainerButton from "../../Components/ContainerButton"
import { checkOperation } from "./Method"

const CacuLatorScreen = () => {
  const [result, setResult] = useState("0")
  const resultAbove = useRef(new Animated.Value(0)).current
  const resultFontAbove = useRef(new Animated.Value(60)).current
  const resultBellow = useState(new Animated.Value(35))[0]

  function animationResultFontAbove() {
    Animated.timing(resultAbove, {
      toValue: 20,
      duration: 600,
      useNativeDriver: false,
    }).start()

    Animated.timing(resultBellow, {
      toValue: 60,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  function setAnimation() {
    animationResultFontAbove()
    Animated.timing(resultFontAbove, {
      toValue: 40,
      duration: 80,
      useNativeDriver: false,
    }).start()
  }

  function changeResult(result) {
    setResult((pre) => {
      if (pre == 0) {
        return result
      } else {
        return pre + result
      }
    })
  }
  function changeOperation() {
    if (result != "0" && Number(result.charAt(0)) > 0) {
      setResult((pre) => "-" + pre)
    } else {
      if (result == "0") {
        return
      }
      const value = result.replace(result[0], "")
      setResult(value)
    }
  }

  function clearResult() {
    setResult("0")
  }
  function calculateResult() {
    try {
      setAnimation()
      console.log("call")
      const index =
        result.search("×") != -1
          ? result.search("×")
          : result.search("÷") != -1
          ? result.search("÷")
          : -1

      if (index != -1) {
        let replaceResult
        const operation = result.charAt(index)
        if (operation == "÷") {
          replaceResult = result.replace(result.charAt(index), "/")
        }
        if (operation == "×") {
          replaceResult = result.replace(result.charAt(index), "*")
        }

        const calculate = eval(replaceResult)
        console.log("caculator", calculate)
        setResult(calculate.toFixed(2))
      } else {
        const calculate = eval(result)

        setResult(calculate)
      }
    } catch (e) {
      setResult(result)
    }
  }
  const caculator = {
    changeResult,
    clearResult,
    calculateResult,
    changeOperation,
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxUpperHalf}>
        <Animated.Text
          style={{
            fontWeight: "bold",
            fontSize: resultFontAbove,
            marginStart: resultAbove,
            color: "white",
          }}
        >
          {result}
        </Animated.Text>
        <Animated.Text
          style={{
            fontWeight: "bold",
            fontSize: resultBellow,
            color: "white",
          }}
        >
          {"0"}
        </Animated.Text>
      </View>
      {/* container for button calculator */}
      <TouchableOpacity onPress={setAnimation}>
        <Text>test animation</Text>
      </TouchableOpacity>
      <ContainerButton caculator={caculator} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxUpperHalf: {
    flex: 0.318,
    backgroundColor: "black",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
})

export default CacuLatorScreen
