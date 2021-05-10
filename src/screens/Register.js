import React from 'react';
import {Text,View,Image, TextInput, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default class Register extends React.Component{

    render() {
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
                
                >Enregistrez-vous</Text>

                

                <Text style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4

                }}>
                    BIENVENUE KAY JIJI ! Laissez-vous emporter dans un univers de saveur avec nos burgers revisités
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
                        
                    
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#00716F"
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
                        
                    
                    <TextInput
                        secureTextEntry
                        placeholder="Mot de passe"
                        placeholderTextColor="#00716F"
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
                        
                    
                    <TextInput
                        secureTextEntry
                        placeholder="Confirmer votre mot de passe"
                        placeholderTextColor="#00716F"
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
                    }}>S'inscrire</Text>
                </View>
            
                <View style={{
                    flexDirection:'row',
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"space-around",
                    marginTop:5,
                    // backgroundColor:"#F5B041",
                    paddingVertical:10,
                    borderRadius:23
                    

                    }}>
                    {/* <AntDesign name="google" size={24} color="black" onPress={() => ('http://www.google.fr')}/>
                    <Entypo name="facebook" size={24} color="black" /> */}
                    <FontAwesome.Button name="facebook" backgroundColor="#3b5998" >
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
