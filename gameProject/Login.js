// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import React, { useState } from "react";

export default function Login({navigation}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [incorrect, setIncorrect] = useState(false)
  
  
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.white}>Snake ⚕ Hog</Text> 
        <Image style={{width: 260, height: 100}} source={{uri: "https://media3.giphy.com/media/gKzh28guQs9u3A6e5k/giphy.gif?cid=ecf05e47ks3189cld4c6lil0ypo23d5jtx64b3j1dfv230u1&rid=giphy.gif&ct=g"}}/>
        <View style={{display: "flex", flexDirection:"row",}}>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
          <Image style= {{width: 20, height: 20}} source={{uri:"https://media1.giphy.com/media/l3vRbzPPasY0Dz4Q0/giphy.gif?cid=ecf05e47n5090byc80xyy9gojzqbt0piajxrrp33rd2hikht&rid=giphy.gif&ct=g"}}/>
        </View>
        <Text style={incorrect?{color:"red", display:"block"}:{color:"red", display:"none"}}>*Incorrect username or password*</Text>
        <View style={styles.underline}>
        <TextInput value={username} onChange={(e)=>{setUsername(e.target.value)}} style={styles.input} placeholder="Username" />          
        <TextInput value={password} onChange={(e)=>{setPassword(e.target.value)}} secureTextEntry={true} style={styles.input} placeholder="Password"/>
        </View>
        <Button 
          style={{fontFamily: "monospace", fontSize: 15}}
            color="#5F6F94"
            title="Login"
            onPress={() => {
              fetch(`http://localhost:9393/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username: username.toLowerCase(), password: password})
              })
              .then(r=>r.json())             
              .then(profile=>{
                if (profile) {
                        if (profile.user.password === password) {
                            setPassword("")
                            setUsername("")
                            navigation.navigate('Game', {profile:profile})
                        }
                        else {
                            setPassword("")
                            setUsername("")
                            setIncorrect(true);
                            setTimeout(()=>setIncorrect(false),3000)
                        }
                    }
                    else {
                        setPassword("")
                        setUsername("")
                        setIncorrect(true);
                        setTimeout(()=>setIncorrect(false),3000)
                    }
              })

              
              
            }}
            />

            <Text onPress={()=>navigation.navigate('CreateAccount')} style={{paddingTop: 15, fontFamily:'monospace',}}> Have no account? Create one </Text>
      </View>
    </>
  )
  }
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#97D2EC',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        margin: 12,
        borderWidth: 1,
      },
      input: {
        backgroundColor: '#FEF5AC',
        height: 40,
        margin: 12,
        borderRadius: 10,
        textAlign: 'center',
        fontFamily:'monospace',
      },
      white:{
        color: "white",
        fontSize: 50,
        paddingBottom: 10,
        paddingTop: 10,
        fontFamily:'monospace',
        fontWeight:900,
      },
      // underline:{
      //     borderBottomColor: "#FFE5B4",
      //     borderBottomWidth: 1,
      //     borderStyle: "dotted",
      //     // borderWidth:10,
      // }
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
