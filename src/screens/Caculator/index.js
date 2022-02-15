/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-eval */
import { View, Text, Animated, TouchableOpacity } from "react-native"
import React, { useState, useRef } from "react"
import ContainerButton from "../../Components/ContainerButton"
import { checkOperation } from "./Method"

const CacuLatorScreen = () => {
  const [result, setResult] = useState("0")
  const resultAbove = useRef(new Animated.Value(0)).current
  const resultFontAbove = useRef(new Animated.Value(60)).current

  const resultBellow = useState(new Animated.Value(35))[0]

  function AnimationFontResultAbove() {
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
    AnimationFontResultAbove()
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
      console.log(
        "DEBUG: - file: index.js - line 25 - changePositive - value",
        value
      )
      setResult(value)
    }
  }

  function ClearResult() {
    setResult("0")
  }
  function CalculateResult() {
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
        const Operation = result.charAt(index)
        if (Operation == "÷") {
          replaceResult = result.replace(result.charAt(index), "/")
        }
        if (Operation == "×") {
          replaceResult = result.replace(result.charAt(index), "*")
        }

        console.log(
          "DEBUG: - file: index.js - line 26 - CalculateResult - replaceResult",
          replaceResult
        )

        const calculate = eval(replaceResult)
        console.log("caculator", calculate)
        setResult(calculate.toFixed(2))
      } else {
        const calculate = eval(result)

        setResult(calculate)
      }
    } catch (e) {
      console.log("result", result)
      setResult(result)
    }
  }
  const Caculator = {
    changeResult,
    ClearResult,
    CalculateResult,
    changeOperation,
  }

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View
        style={{
          flex: 0.318,
          backgroundColor: "black",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Animated.Text
          style={{
            fontWeight: "bold",
            fontSize: resultFontAbove,
            marginStart: resultAbove,
            color: "white",
            backgroundColor: "blue",
          }}
        >
          {result}
        </Animated.Text>
        <Animated.Text
          style={{
            fontWeight: "bold",
            fontSize: resultBellow,
            color: "white",
            backgroundColor: "red",
          }}
        >
          {"0"}
        </Animated.Text>
      </View>
      {/* container for button calculator */}
      <TouchableOpacity onPress={setAnimation}>
        <Text>dsasd</Text>
      </TouchableOpacity>
      <ContainerButton Caculator={Caculator} />
    </View>
  )
}

export default CacuLatorScreen
