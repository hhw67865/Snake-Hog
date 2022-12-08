import React from "react";
import { View,Image } from "react-native";
import Constants from "./Constants";
export default function Tail({ elements, position, size }) {
  const tailList = elements.map((el, idx) => (
    <Image
      key={idx}
      style={{
        width: size,
        height: size,
        position: "absolute",
        left: el[0] * size,
        top: el[1] * size,
        // backgroundColor: "#EB6440",
      }}
      source = {{uri:"https://media2.giphy.com/media/L9IwIhfHg7xMSqvCYK/giphy.gif?cid=ecf05e476y27lldh398zrxv4enu5ihva8e3tn2pnzrdbh6jg&rid=giphy.gif&ct=s"}}
    />
  ));
  return (
    <View
      style={{
        width: Constants.GRID_SIZE * size,
        height: Constants.GRID_SIZE * size,
      }}
    >
      {tailList}
    </View>
  );
}