import { Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import React, { useState, useRef, useEffect } from "react";
import { GameEngine } from "react-native-game-engine";
// import Sound from 'react-native-sound';
import Constants from "./Constants";
import Head from "./Head";
import Food from "./Food";
import Tail from "./Tail";
import GameLoop, {resetScore, score} from "./GameLoop";



export default function Game ({navigation,route}) {
  
    
    const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    const engine = useRef(null);
    const [isGameRunning, setIsGameRunning] = useState(true);
    const [replay, setReplay] = useState(true)


    const randomPositions = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const resetGame = () => {
      document.removeEventListener("keydown", keyboard)
      engine.current.swap({
        head: {
          position: [0, 0],
          size: Constants.CELL_SIZE,
          updateFrequency: 10,
          nextMove: 10,
          xspeed: 0,
          yspeed: 0,
          renderer: <Head />,
        },
        food: {
          position: [
            randomPositions(0, Constants.GRID_SIZE - 1),
            randomPositions(0, Constants.GRID_SIZE - 1),
          ],
          size: Constants.CELL_SIZE,
          updateFrequency: 10,
          nextMove: 10,
          xspeed: 0,
          yspeed: 0,
          renderer: <Food />,
        },
        tail: {
          size: Constants.CELL_SIZE,
          elements: [],
          renderer: <Tail />,
        },
      });
      setIsGameRunning(true);
    };
    function keyboard (e) {
      // console.log(e.key)
      switch (e.key) {
        case "ArrowLeft":
          engine.current.dispatch("move-left")
          break
        case "ArrowRight":
          engine.current.dispatch("move-right")
          break
        case "ArrowUp":
          engine.current.dispatch("move-up")
          break
        case "ArrowDown":
          engine.current.dispatch("move-down")
          break
      }
    }

      useEffect(()=>{
        document.addEventListener("keydown", keyboard)
        
      },[replay])
      
    return (
      <View style={styles.canvas}>
        <GameEngine
          ref={engine}
          style={{
            width: BoardSize,
            height: BoardSize,
            flex: null,
            backgroundColor: "#FFE5B4",
            fontFamily:'monospace',
          }}
          entities={{
            head: {
              position: [0, 0],
              size: Constants.CELL_SIZE,
              updateFrequency: 10,
              nextMove: 10,
              xspeed: 0,
              yspeed: 0,
              renderer: <Head />,
            },
            food: {
              position: [
                randomPositions(0, Constants.GRID_SIZE - 1),
                randomPositions(0, Constants.GRID_SIZE - 1),
              ],
              size: Constants.CELL_SIZE,
              renderer: <Food />,
            },
            tail: {
              size: Constants.CELL_SIZE,
              elements: [],
              renderer: <Tail />,
            },
          }}
          systems={[GameLoop]}
          running={isGameRunning}
          onEvent={(e) => {
            switch (e) {
              case "game-over":
                alert("Game over!");
                
                setIsGameRunning(false);
                
                // play();
                fetch (`http://localhost:9393/scores`, {
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify({user_id: route.params.profile.user.id, score: score})
                })
                .then ( r => r.json())
                .then (()=>{
                  navigation.navigate('Gameover', {profile: route.params.profile, score: score, resetGame: resetGame, setReplay: setReplay})
                  resetScore();
                  return;
                } )
                
            }

          }}
        />

     {/* {!isGameRunning && (
        <Button 
        color="#231955"
        title="Game over"
        onPress={() => navigation.navigate('Gameover')}
        />
       <View 
        style={{
          position:"flex",
          // bottom: 300,
          alignItems:"center",
          zIndex:3,
          padding:10,
          fontSize: 32,
          backgroundColor: "#1F4690",
          borderRadius: 30,
        }}
        >
          <TouchableOpacity onPress={resetGame}>
            <Text style={{color:"white"}}>Start New Game</Text>
          </TouchableOpacity>
      </View>
      )} */}
        <View style={styles.controlContainer}>
        <View style={styles.controllerRow}>
          <TouchableOpacity onPress={() => engine.current.dispatch("move-up")}>
          <Image style={{width: 18, height: 24}} source={{uri:"https://www.shareicon.net/data/2015/08/24/90324_arrow_512x512.png"}}/>
            {/* <View style={styles.controlBtn} /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.controllerRow}>
          <TouchableOpacity
            onPress={() => engine.current.dispatch("move-left")}
          >
            {/* <View style={styles.controlBtn} /> */}
            <Image style= {{width: 16, height: 12, right: 6 }} source={{uri: "http://cdn.onlinewebfonts.com/svg/img_77631.png"}}/>
          </TouchableOpacity>
          <View style={[styles.controlBtn, { backgroundColor: null }]} />
          <TouchableOpacity
            onPress={() => engine.current.dispatch("move-right")}
          >
            {/* <View style={styles.controlBtn} /> */}
            <Image style= {{width: 16, height: 12, left: 6, transform:[{rotateY: '180deg'}]}} source={{uri: "http://cdn.onlinewebfonts.com/svg/img_77631.png"}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.controllerRow}>
          <TouchableOpacity
            onPress={() => engine.current.dispatch("move-down")}
          >
            {/* <View style={styles.controlBtn} /> */}
            <Image style={{width: 18, height: 24, transform:[{rotateX: '180deg'}]}} source={{uri:"https://www.shareicon.net/data/2015/08/24/90324_arrow_512x512.png"}}/>
          </TouchableOpacity>
        </View>
      </View>
      </View> 
    )
  }

  const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: "D6E4E5",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    fontFamily:'monospace',
  },
  controlContainer: {
    zIndex: 2,
    position: "relative",
    right:-150,
    top: -60,
  },
  controllerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  // controlBtn: {
  //   backgroundColor: "#EFF5F5",
  //   width: 20,
  //   height: 20,
  // },
});