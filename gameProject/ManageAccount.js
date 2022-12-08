import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import React, { useState } from "react";



export default function ManageAccount( {navigation, route} ){

    const [password, setPassword] = useState('')
    const [name, setName] = useState ('')

    

    const handleUpdate=( )=>{
        if(password !== "") {
            fetch ( `http://localhost:9393/users/${route.params.profile.user.id}`,{
              method: 'PATCH',
              headers: {
             'Content-Type': 'application/json'
              },
              body: JSON.stringify({ password: password})
              })
            .then ( r => r.json())
            .then ( password)

        } 
        if (name !== ""){
            fetch ( `http://localhost:9393/users/${route.params.profile.user.id}`,{
                method: 'PATCH',
                headers: {
               'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name})
                })
              .then ( r => r.json())
              .then (name)
        }
        route.params.resetGame()
        
        navigation.navigate('Login')
        
    }

    const handleDelete = ()=>{
        fetch ( `http://localhost:9393/users/${route.params.profile.user.id}`,{
            method: 'DELETE'})
            .then(()=> {
              route.params.resetGame()
              
              navigation.navigate('Login')})
            
    }

    const handleLogout = () => {
        route.params.resetGame()
        
        navigation.navigate('Login')
    }

    return(
        <View style={styles.container}>
            <Text  style ={styles.font}>Change Password</Text>
            <TextInput value={password} onChange={(e)=>{setPassword(e.target.value)}} secureTextEntry={true} style={styles.input} placeholder="Password"/>
      
            <Text style ={styles.font}>Change Name</Text>
            <TextInput value={name} onChange={(e)=>{setName(e.target.value)}} style={styles.input} placeholder="Your Name" />          
            <View style={{display:"flex", flexDirection: "row", alignContent:"center", gap: 30, margin: 10 }}>
              <Text style={{fontSize: 28}} onPress={()=>{navigation.goBack()}}> 🔙 </Text>
              <Button title= "Update" color= "#E8AA42" onPress={ handleUpdate} style={styles.button}></Button>
              <Text style={{fontSize: 28}} onPress = {handleLogout} title="Logout">❌</Text>
            </View>
            <View style={{display: "flex", flexDirection: "row"}}>
              <Image style= {{width: 70, height: 80}} source={{uri:"https://media3.giphy.com/media/xUNemL2Yrwl6IoYWFa/giphy.gif?cid=790b76113c4341751e7d5835f431d48a407d6e37260719d1&rid=giphy.gif&ct=s"}}/>
              <Text onPress = {handleDelete} style={{textAlign:"center", marginTop: 20, color:"#1F4690", fontFamily:'monospace', fontWeight: 200,}}>delete this account T^T</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE5B4',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      margin: 12,
      borderWidth: 1,
      fontFamily:'monospace',
    },
    input: {
      backgroundColor: '#97D2EC',
      width: 200,
      color:"white",
      height: 40,
      margin: 12,
      borderRadius: 10,
      textAlign: 'center',
      fontFamily:'monospace',
      fontWeight: 200,
    },
    font:{
      color: "#5F6F94",
      fontSize: 18,
      paddingBottom: 5,
      paddingTop: 10,
      fontFamily:'monospace',
      fontWeight: 900,
    },
    button: {
        marginBottom : 20,
        color: "white",
    }
  })