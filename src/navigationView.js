import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, DrawerLayoutAndroid, Image, FlatList } from 'react-native';
import { NativeRouter, Route, Link, BackButton } from "react-router-native";

export default function navigationView () {
    return (
      <View style={styles.navig}>
        <TouchableOpacity style={ styles.buttonNavig }>
          <Text>Мои подписки</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.buttonNavig }>
          <Text>Настройка</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.buttonNavig }>
          <Text>Уведомление</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.buttonNavig }>
          <Text>Справка</Text>
        </TouchableOpacity>
      </View>
)
}
const styles = StyleSheet.create({
  navig : {
    flex : 1,
    flexDirection: 'column',
    paddingTop : 20,
  },
  buttonNavig : {
    alignItems: "center",
    padding: 20,
  }
})
