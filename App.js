import React,{useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import {Header, Button} from 'react-native-elements';


export default function App() {

  const [term, setTerm] = useState('test term');
  const setTermHandler = term =>{
    setTerm(term);
  }
  return (
      <View>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Git Edited', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{backgroundColor:'red'}}
      />
      <View style={{padding:10,}}>
        <TextInput 
        style={{borderBottomWidth:2,borderBottomColor:'#ededed'}}
        value={term}
        onChangeText={setTermHandler}
        />
        <Button
          title="Search"
          type="solid"
          onPress={()=>console.log('button pressed')}
        />
      </View>
      <Text>{term}</Text>
    </View>
  );
};


