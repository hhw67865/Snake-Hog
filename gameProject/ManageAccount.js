import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, { useState } from "react";



export default function ManageAccount( {navigation, route} ){

    const [password, setPassword] = useState('')
    const [name, setName] = useState ('')

    console.log(route.params.profile)

    const handleUpdate=( )=>{
        if(password !== "") {
            fetch ( `http://localhost:9393/users/${route.params.profile.id}`,{
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
            fetch ( `http://localhost:9393/users/${route.params.profile.id}`,{
                method: 'PATCH',
                headers: {
               'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name})
                })
              .then ( r => r.json())
              .then ( name )
        }
        navigation.navigate('Login')
    }

    const handleDelete = ()=>{
        fetch ( `http://localhost:9393/users/${route.params.profile.id}`,{
            method: 'DELETE'})
    }

    return(
        <View style={styles.container}>
            <Text  style ={styles.white}> Change Password</Text>
            <TextInput value={password} onChange={(e)=>{setPassword(e.target.value)}} secureTextEntry={true} style={styles.input} placeholder="Password"/>
      
            <Text style ={styles.white}> Change Name</Text>
            <TextInput value={name} onChange={(e)=>{setName(e.target.value)}} style={styles.input} placeholder="Your Name" />          
            
            <Button title= "Update" onPress={ handleUpdate} style={styles.button}></Button>
            <Text onPress = {handleDelete} style={{textAlign:"center", marginTop: 20, color:"white", fontFamily:'monospace', fontWeight: 200,}}>delete this account T^T</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5F6F94',
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
      boardUnderLineColor:"white",
      height: 40,
      margin: 12,
      borderRadius: 10,
      textAlign: 'center',
      fontFamily:'monospace',
      fontWeight: 200,
    },
    white:{
      color: "white",
      fontSize: 18,
      paddingBottom: 5,
      paddingTop: 10,
      fontFamily:'monospace',
      fontWeight: 500,
    },
    button: {
        marginBottom : 20,
        color: "white",
    }
  })