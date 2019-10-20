import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import Card from '../components/Card';


const StartGameScreen = props =>{

    const newAlert = ()=>{
        Alert.alert('Hello','tttt',[{text:'Okay',style:'destructive'}]);
        return;
    };
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Financial Sathi</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput  />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={newAlert} />
                    <Button title="Confirm" onPress={()=>{}} />
                </View>
            </Card>
        </View>
    );
};


const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
        backgroundColor: '#fff',
        padding:10,
        elevation:2,
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,
    }
});


export default StartGameScreen;