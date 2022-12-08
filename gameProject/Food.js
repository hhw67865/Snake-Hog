import React from "react";
import { View, Image } from "react-native";

export default function Food({ position, size }) {
  return (
    <View
      // style={{
      //   width: size,
      //   height: size,
      //   backgroundColor: "#497174",
      //   position: "absolute",
      //   left: position[0] * size,
      //   top: position[1] * size,
      //   borderRadius: 50
      // }}
    >
      <Image     
        style={{
          width: size,
          height: size,
          position: "absolute",
          left: position[0] * size,
          top: position[1] * size,
        }}
        source={{uri:"https://media1.giphy.com/media/oHJdcg8iPUFtt4ks9y/giphy.gif"}}/>
    </View>
  );
}