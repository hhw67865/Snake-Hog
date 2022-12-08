import {Animated, FlatList, Button, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect, useRef } from "react";

export default function GameOver ({navigation, route}) {
const [users, setUsers] = useState([])
const [scores, setScores] = useState([])


useEffect( () =>{
  fetch (`http://localhost:9393/users/${route.params.profile.user.id}/highestscores`)
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
      return `${route.params.profile.user.name} ate no hogs! Stay Hungry.`
    }
    if (score===1) {
      return `${route.params.profile.user.name} ate only one hog! Seriously?`
    }
    if (score>=2 && score<4) {
      return `${route.params.profile.user.name} ate ${score} hogs! You might not survive the winter...`
    }
    if (score>=4 && score<7) {
      return `${route.params.profile.user.name} ate ${score} hogs! You will probably survive...`
    }
    if (score>=7) {
      return `${route.params.profile.user.name} ate ${score} hog! The other snakes respect you!`
    }
  }

  // const translation = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   for (let i = 0; i < 50; i++) {
  //     setTimeout(() => {
  //       translation.setValue(i);
  //     }, 25 * i);
  //   }
  // }, []);

    return (
      <View style={styles.container} >
        {/* <Animated.View style={{ transform: [{ translateY: translation }]}}> </Animated.View> */}
        <Image style= {{width: 250, height: 80}} source={{uri:"https://media2.giphy.com/media/IpXPcJpZZvpW5G9KH2/giphy.gif?cid=ecf05e47e60s4hx8hy05ef5cmk46oiasopn4hv7vpon7snm3&rid=giphy.gif&ct=g"}}/>
        <Text style={styles.text} >Game Over!</Text>
        <Text style={{textAlign:"center", color:"grey", paddingBottom: 10, fontSize:18, fontFamily:'monospace', fontWeight: 400}}>
          { 
          scoreExpression( route.params.score )
          // You ate {route.params.score} food 
          }
          </Text>
        <View>
          <Button onPress={()=>{
            route.params.resetGame();
            route.params.setReplay(prev=>!prev)
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
        <View >
          {/* <Text > Manage Account</Text>  */}
          <Text style = {{paddingTop: 20, fontSize: 14, color:"#E8AA42", fontWeight: 600}} 
          onPress={()=>{navigation.navigate('ManageAccount', {profile: route.params.profile, resetGame: route.params.resetGame})}}
          >---- Click to Manage Your Account ---- </Text>
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
      fontSize: 70,
      color: "#25316D",
      textShadowColor: "#E8AA42", 
      textShadowOffset:{width: 5, height:2},
      paddingBottom: 10,
      // textDecorationLine:"line-through",
      // fontFamily:'monospace',
      fontWeight: 900,
    }
  });
  