import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';

export default function App() {
    return (
      <SafeAreaView style = { styles.container }>
        <View style = { styles.search }>
          <TextInput style = { styles.input } />
          <StatusBar style = "auto" />
        </View>
        <View style = { styles.scroll}>
          <ScrollView>
            <Text style = { styles.text }>123 {'\n'} 123 {'\n'} 123 {'\n'} 123 {'\n'} 123 {'\n'} 123 {'\n'} 123 {'\n'} 123 {'\n'} 123 {'\n'} 123 {'\n'}123 {'\n'} 123 {'\n'} 123 {'\n'} 123 {'\n'} 123</Text>
          </ScrollView>
        </View>
        <View style = { styles.panel}>
          <TouchableOpacity style={ styles.button }>
            <Text>Справка</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button }>
            <Text>Мои</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button }>
            <Text>Настройка</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    input: {
      borderRadius : 5,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 5
  },
  search : {
      paddingTop : 20
  },
  panel : {
    borderTopWidth : 1,
    borderStyle : 'solid',
    borderColor : 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding : 10
  },
  text : {
    fontSize : 42
  },
  scroll : {
    maxHeight : '80%'
  },
  button : {
    alignItems: "center",
    padding: 10
  }
});
