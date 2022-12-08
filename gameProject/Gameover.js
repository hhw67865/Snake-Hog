import { FlatList, Button, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from "react";

export default function GameOver ({navigation, route}) {
const [users, setUsers] = useState([])
const [scores, setScores] = useState([])


useEffect( () =>{
  fetch (`http://localhost:9393/users/${route.params.profile.id}/highestscores`)
  .then ( r => r.json())
  .then ( data => setUsers(data))
  },[])

useEffect( () =>{
  fetch ('http://localhost:9393/scores/highestscores')
  .then ( r => r.json())
  .then ( data => setScores(data))
  },[])


  const scoreArray = scores.map((score,id) =>{
    return `${id+1}. ${score.score} --- ${score.name}`

  })
  const userArray = users.map((user,id)=>{
    return `${id+1}. ${user.score}`
  })

  function scoreExpression (score) {
    if (score===0) {
      return `${route.params.profile.name} ate no apples! Stay Hungry.`
    }
    if (score===1) {
      return `${route.params.profile.name} ate only one apple! Seriously?`
    }
    if (score>=2 && score<4) {
      return `${route.params.profile.name} ate ${score} apples! You might not survive the winter...`
    }
    if (score>=4 && score<7) {
      return `${route.params.profile.name} ate ${score} apples! You will probably survive...`
    }
    if (score>=7) {
      return `${route.params.profile.name} ate ${score} apples! The other snakes respect you!`
    }
  }


    return (
      <View style={styles.container}>
        <Text style={styles.text}>Game Over! </Text>
        <Text style={{textAlign:"center", color:"black", paddingBottom: 10, fontSize:26, fontFamily:'monospace', fontWeight: 400}}>
          { 
          scoreExpression( route.params.score )
          // You ate {route.params.score} food 
          }
          </Text>
        <View>
          <Button onPress={()=>{
            route.params.resetGame();
            navigation.navigate('Game', {profile:route.params.profile})
            }} title="Play Again?">
          </Button>
        </View>
        {/* <View style={styles.underline}></View> */}
        <View style={{display:"flex", flexDirection:"row", paddingTop: 20}}>
         
          <View style={{width:"50%"}}>
            <Text style={styles.font}>Highscores!</Text>
                <FlatList
                style={styles.font}
                data={ scoreArray.slice(0,5) }
                renderItem={({item}) => <Text>{item}</Text>}
              />
          </View>

          <View style={{paddingLeft: 30}}>
              <Text style={styles.font}>Your Highscores!</Text>
              <FlatList
              style={styles.font}
                data={ userArray.slice(0,5) }
                renderItem={({item}) => <Text >{item}</Text>}
              />
          </View> 
            
        </View>
        <View style = {{paddingTop: 20, fontSize: 12, color:"#E8AA42"}}>
          {/* <Text onPress={()=>{navigation.navigate('ManageAccount', {profile: route.params.profile})}}> Manage Account</Text>  */}
          <Text> Manage Account </Text>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:"flex",
      // flexDirection:"column",
      alignItems:"center",
      justifyContent: "center"
    },
    underline:{
      borderBottomColor: "#FFE5B4",
      borderBottomWidth: 1,
      borderStyle: "dotted",
      // borderWidth:10,
    },
    font:{
      fontStyle:"oblique", 
      fontSize: 20,
      fontFamily:'monospace',
      fontWeight: 400
    },
    text: {
      fontSize: 50,
      color: "#25316D",
      padding: 10,
      top: 20,
      fontWeight: 500,
      fontFamily:'monospace',
      fontWeight: 1000
    }
  });
  