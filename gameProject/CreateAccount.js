import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, { useState } from "react";

export default function CreateAccount({navigation}){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [incorrect, setIncorrect] = useState(false)
    
    const handleSubmit=()=>{

        fetch ('http://localhost:9393/users',{
          method: 'POST',
          headers: {
         'Content-Type': 'application/json'
          },
          body: JSON.stringify({
                username: username.toLowerCase(),
                password: password,
                name: name
             })
          })
        .then ( r => r.json())
        .then ( profile => {
            if (profile) {
                navigation.navigate('Login')
            }
            else {
                setIncorrect(true);
                setTimeout(()=>setIncorrect(false),3000)
            }
        })
    }

    return(
        <View style={styles.container}> 
            <Text style={styles.text}>Create your Account</Text>
            <Text style={incorrect?{color:"red", display:"block"}:{color:"red", display:"none"}}>*This username already exists*</Text>
            <TextInput style={styles.input} value={username} placeholder='create your username...' onChange={e=>{setUserName(e.target.value)}}></TextInput>
            <TextInput style={styles.input} value={password} placeholder='enter your password...' secureTextEntry={true} onChange={e=>{setPassword(e.target.value)}}></TextInput>
            <TextInput style={styles.input} value={name} placeholder='enter your name...' onChange={e=>{setName(e.target.value)}}></TextInput>
            <View style={{display:"flex", flexDirection: "row", alignContent:"center", gap: 60, marginTop: 10 }}>
              <Text style={{fontSize: 28}} onPress={()=>{navigation.navigate('Login')}}> 🔙 </Text>
              <Button title= "Create" color = "#EB6440" onPress={ handleSubmit} style={{borderRadius: 15}}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D6E4E5',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      margin: 12,
      borderWidth: 1,
    },
    input: {
      backgroundColor: '#fff',
      width: 200,
      boardUnderLineColor:"#EB6440",
      height: 40,
      margin: 12,
      borderRadius: 10,
      textAlign: 'center',
      fontFamily:'monospace',
      fontWeight: 200,
    },

   text:{
      color: "#497174",
      fontSize: 30,
      paddingBottom: 30,
      fontFamily:'monospace',
      fontWeight: 1000,
      textAlign:"center"
    },
  });