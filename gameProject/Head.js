import React from "react";
import { View, Image } from "react-native";
export default function Head({ position, size }) {
  return (
    <View
      // style={{
      //   width: size,
      //   height: size,
      //   backgroundColor: "#EB6440",
      //   position: "absolute",
      //   left: position[0] * size,
      //   top: position[1] * size,
      // }}
    >
      <Image     
        style={{
          width: size,
          height: size,
          position: "absolute",
          left: position[0] * size,
          top: position[1] * size
        }}
        source={{uri:"https://media1.giphy.com/media/LlhmZySdrqJm2gDbHL/giphy.gif?cid=790b7611d54cc455068f9f931cb7606f2e32e4f7dbeeb2a4&rid=giphy.gif&ct=s"}}/>
    </View>
  );
}