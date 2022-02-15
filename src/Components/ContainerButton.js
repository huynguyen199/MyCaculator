import { View, Text } from "react-native"
import React from "react"
import ButtonCaculator from "./ButtonCaculator"

const ContainerButton = ({ Caculator }) => {
  return (
    <View
      style={{
        backgroundColor: "yellow",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "orange",
          height: 100,
        }}
      >
        <ButtonCaculator
          onPress={Caculator.ClearResult}
          value={"AC"}
          style={{ backgroundColor: "#4D4846", borderColor: "black" }}
          textColor={"white"}
        />
        <ButtonCaculator
          onPress={() => Caculator.changeOperation()}
          value={"+/-"}
          style={{ backgroundColor: "#4D4846" }}
          textColor={"white"}
        />

        <ButtonCaculator
          onPress={() => Caculator.changeResult("%")}
          value={"%"}
          style={{ backgroundColor: "#4D4846" }}
          textColor={"white"}
        />
        <ButtonCaculator
          onPress={() => Caculator.changeResult("÷")}
          value={"÷"}
          style={{ backgroundColor: "#F6C22E" }}
        />
      </View>
      {/* end */}
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "orange",
          height: 100,
        }}
      >
        <ButtonCaculator
          onPress={() => Caculator.changeResult("7")}
          value={"7"}
          style={{ backgroundColor: "red" }}
        />
        <ButtonCaculator
          onPress={() => Caculator.changeResult("8")}
          value={"8"}
          style={{ backgroundColor: "yellow" }}
        />

        <ButtonCaculator
          onPress={() => Caculator.changeResult("9")}
          value={"9"}
          style={{ backgroundColor: "red" }}
        />
        <ButtonCaculator
          onPress={() => Caculator.changeResult("×")}
          value={"×"}
          style={{ backgroundColor: "red" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "orange",
          height: 100,
        }}
      >
        <ButtonCaculator
          onPress={() => Caculator.changeResult("4")}
          value={"4"}
          style={{ backgroundColor: "red" }}
        />
        <ButtonCaculator
          onPress={() => Caculator.changeResult("5")}
          value={"5"}
          style={{ backgroundColor: "yellow" }}
        />

        <ButtonCaculator
          onPress={() => Caculator.changeResult("6")}
          value={"6"}
          style={{ backgroundColor: "red" }}
        />
        <ButtonCaculator
          onPress={() => Caculator.changeResult("-")}
          value={"−"}
          style={{ backgroundColor: "red" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "orange",
          height: 100,
        }}
      >
        <ButtonCaculator
          onPress={() => Caculator.changeResult("1")}
          value={"1"}
          style={{ backgroundColor: "red" }}
        />
        <ButtonCaculator
          onPress={() => Caculator.changeResult("2")}
          value={"2"}
          style={{ backgroundColor: "yellow" }}
        />

        <ButtonCaculator
          onPress={() => Caculator.changeResult("3")}
          value={"3"}
          style={{ backgroundColor: "red" }}
        />
        <ButtonCaculator
          onPress={() => Caculator.changeResult("+")}
          value={"+"}
          style={{ backgroundColor: "red" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "orange",
          height: 100,
        }}
      >
        <ButtonCaculator
          onPress={() => Caculator.changeResult("0")}
          value={"0"}
          style={{ backgroundColor: "blue", flexGrow: 2 }}
        />

        <ButtonCaculator
          onPress={() => Caculator.changeResult(".")}
          value={"."}
          style={{ backgroundColor: "pink" }}
        />
        <ButtonCaculator
          onPress={() => Caculator.CalculateResult()}
          value={"="}
          style={{ backgroundColor: "yellow" }}
        />
      </View>
    </View>
  )
}

export default ContainerButton
