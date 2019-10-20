import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props =>{
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}


const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        padding:10,
        elevation:2,
    }
});


export default Card;