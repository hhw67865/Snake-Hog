import {  StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from 'react-native';
import React, { useState } from "react";

const DATA = [
    {
      name: "User1",
      score: 12434
    },
    {
      name: "User2",
      score: 1354
    },
    {
      name: "user3",
      score: 345
    },
    {
      name: "user4",
      score: 124
    }
  ];
  
  const Item = ({name}) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );

export default function GameOver ({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
        //   keyExtractor={(item, index) => item + index}
        //   renderItem={({ item }) => <Item name ={item} />}
          renderSectionHeader={({ section: {name} }) => (
            <Text style={styles.header}>{name}</Text>
          )}
        />
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#02394A",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    name: {
      fontSize: 24
    }
  });
  