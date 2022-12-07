import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import React, { useState } from "react";


export default function Game ({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Your Highscore:</Text>
        <Button
            title="Gameover"
            onPress={() =>
              navigation.navigate('Gameover')
            }
        />
        <TouchableOpacity activeOpacity={0.5}>
            <Text>⬅️</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
            <Text>⬆️</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
            <Text>➡️</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
            <Text>⬇️</Text>
        </TouchableOpacity>
        
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#043565',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      margin: 12,
      borderWidth: 1,
    },
    input: {
      backgroundColor: '#fff',
      height: 40,
      margin: 12,
      borderRadius: 10,
      textAlign: 'center',
    },
    white:{
      color: "white",
      fontSize: 30,
      paddingBottom: 50
    },
  });