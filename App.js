import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')

  function addItem(){
    if(inputValue!==''){
      setList([...list, {value:inputValue, id:uuidv4(), checked: false}])
      setInputValue('')
    }
  }
  
  function onPressToDoList(isChecked, item){
    const newList=list.map(element=>element.id===item.id?{...element, checked:isChecked}:element)
    const listUnChecked=newList.filter(element=>!element.checked)
    const listChecked=newList.filter(element=>element.checked)
    setList([...listUnChecked, ...listChecked])    
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To do list</Text>
      <Text style={styles.subtitle}>1 item adicionado</Text>
      <FlatList 
        style={styles.list}
        data={list}
        renderItem={({item})=>
          <View style={styles.toDoItem}>
            <BouncyCheckbox
              size={25}
              fillColor="#8270f8"
              unfillColor="#FFFFFF"
              isChecked={item.checked}
              text={item.value}
              iconStyle={{ borderColor: "#ccc", borderRadius: 8,}}
              onPress={(isChecked) => onPressToDoList(isChecked, item)}
            />
          </View>
        }
      />
      <View style={styles.inputContainer}>
        <View style={styles.customInput}>
        <TextInput
          style={styles.input}
          placeholder="insira algo"
          onChangeText={setInputValue}
          value={inputValue}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={addItem}
        />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F4F9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#9699A2',
    fontSize: 16,
  },
  list: {
    marginTop: 8,
  },
  inputContainer: {
    backgroundColor: `#F1F4F9`,
    height: 50,
    
  },
  customInput:{
    flexDirection: `row`,
    padding: 5,
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
    borderColor: '#ccc'
  },
  input: {
    height: 40,
    flex: 1,
  },
  button: {
    backgroundColor: '#ccc',
    height: 30,
    width: 30,
    borderRadius: 8,
  },
  toDoItem: {
    backgroundColor: '#fff',
    height: 40,
    width: '100%',
    marginBottom: 8,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 8,
  }
});
