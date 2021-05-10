import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default class Login extends React.Component{

    render() {
        const {navigate} = this.props.navigation

        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source={require('../images/food.jpg')}
                    style={{width:"100%",height:"43%"}}
                />

                <Text
                    style={{
                        fontSize:30,
                        fontFamily:"SemiBold",
                        alignSelf:"center"
                    }}
                    
                
                >Bienvenue KAY JIJI !</Text>
                

                <Text style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4

                }}>
                    Mangez à votre faim. Ne soyez pas timide. Nous sommes ravis de vous recevoir. Bon appétit
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                    }}>
                        
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput
                        style={{paddingHorizontal:10}}
                    />

                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                    }}>
                        
                    <Icon name="lock" color="#00716F" size={24}/>
                    <TextInput
                        style={{paddingHorizontal:10}}
                    />

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                    

                    }}>
                    <Text style={{
                        color:'white',
                        fontFamily:"SemiBold"
                        }}

                        onPress={() => navigate('Home')}  
                    
                    >Login</Text>
                </View>
                
                <Text 
                
                    onPress={() => navigate('Register')}
                    
                    style={{
                        alignSelf:"center",
                        color:"#00716F",
                        fontFamily:"SemiBold",
                        paddingVertical:20
                }}>Inscription</Text>

                <View style={{
                    flexDirection:'row',
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"space-around",
                    marginTop:5,
                    // backgroundColor:"#F5B041",
                    paddingVertical:10,
                    borderRadius:23,
                    
                    

                    }}>
                    
                    <FontAwesome.Button name="facebook" backgroundColor="#3b5998"  >
                        Facebook
                    </FontAwesome.Button>

                    <FontAwesome.Button name="google" backgroundColor="#F5B041" >
                        Google
                    </FontAwesome.Button>
                    
                </View>
              
            </View>
        )
    }

}
