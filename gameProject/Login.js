// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, { useState } from "react";



export default function Login({navigation}) {
  return (
    <>
        <View style={styles.container}>
        {/* <Text style={styles.red}>just red</Text> */}
        <Text style={styles.white}>Login</Text>
        <TextInput style={styles.input} placeholder="Username" />          
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" onChange={null}/>
        <Button 
            color="#5158BB"
            title="Login"
            onPress={() => navigation.navigate('Game')}
            />
        </View>
    </>
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




// export default function Login({navigation }) {

//     const[username, setUsername] = useState("")
//     const[password, setPassword] = useState("")
//     const [incorrect, setIncorrect] = useState(false)

//     let navigate = useNavigate();

//     function handleTouch (e) {
//         e.preventDefault();

//         fetch(`http://localhost:9292/users/${username.toLowerCase()}`)
//         .then(r=>r.json())
//         .then(profile => {
//             if (profile) {
//                 if (profile.password === password) {
//                     setUser(profile)
//                     setLogin(true)
//                     navigate(`/`)
//                 }
//                 else {
//                     setIncorrect(true);
//                     setTimeout(()=>setIncorrect(false),3000)
//                 }
//             }
//             else {
//                 setIncorrect(true);
//                 setTimeout(()=>setIncorrect(false),3000)
//             }
//         })
//     }
//   return (
//     <View style={styles.container}>
//       <Text> Login!</Text>
//       <TextInput  style={styles.input} placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>          
//       <TextInput  style={styles.input} type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//     <Button title="Login" onPress={handleTouch} color= {style.color}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   color:{
//     color: '#2196F3'
//   }
// });

// import {useState} from "react"
// import {useNavigate} from 'react-router-dom'

// function Login ({setUser, setLogin}) {
//     const[username, setUsername] = useState("")
//     const[password, setPassword] = useState("")
//     const [incorrect, setIncorrect] = useState(false)

//     let navigate = useNavigate();

//     function handleSubmit (e) {
//         e.preventDefault();

//         fetch(`http://localhost:9292/users/${username.toLowerCase()}`)
//         .then(r=>r.json())
//         .then(profile => {
//             if (profile) {
//                 if (profile.password === password) {
//                     setUser(profile)
//                     setLogin(true)
//                     navigate(`/`)
//                 }
//                 else {
//                     setIncorrect(true);
//                     setTimeout(()=>setIncorrect(false),3000)
//                 }
//             }
//             else {
//                 setIncorrect(true);
//                 setTimeout(()=>setIncorrect(false),3000)
//             }
//         })
//     }

//     return (
//         <form id = "login-box" onSubmit={handleSubmit}>
//             <h1>LOG IN</h1>
//                 <h3>TO DIG YOUR TREASURES💰</h3>
//                 <p style={incorrect?{color: "red", display: "block"}:{color: "red", display: "none"}}>*Incorrect username or password*</p>
//             <div className="input-box">
//                 <i className="fa-solid fa-user fa-lg"></i>
//                 <input type = "text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
//             </div>
//             <div className="input-box">
//                 <i className="fa-solid fa-lock fa-lg"></i>
//                 <input type = "password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     )

// }
// #login-box{
//     /* border: 2px solid brown; */
//     background: rgba(149,104,70, 0.6);
//     text-align: center;
//     margin: 0,auto;
//     width: 360px;
//     height: 400px;
//   }
//   h3{
//     color: #fff;
//     padding-bottom: 40px;
//   }
//   #login-box h1 {
//     padding-top: 60px;
//     color: #fff;
//     font-weight: 600;
//   }
  
//   #login-box .input-box{
//     margin-top: 15px;
//     /* border: 2px solid red; */
//   }
  
//   #login-box .input-box input{
//     border: none;
//     background: none;
//     border-bottom: #fff 2px solid;
//     padding: 5px 10px;
//     outline: none;
//     color: #fff;
//   }
  
//   #login-box button{
//     margin-top: 30px;
//     width: 80px;
//     height: 30px;
//     border-radius: 15px;
//     outline: none;
//     border: none;
//     color:#fff ;
//     background: rgb(149,104,70);
//   }
  
//   #login-box button:hover{
//     background: #FF8400;
//   }
  
//   .fa-solid{
//     color :#fff;
//     display: inline;
//     margin-right: 5px;
//     /* border: 2px solid red; */
//   }
