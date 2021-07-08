import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, DrawerLayoutAndroid, Image, FlatList, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, BackButton } from "react-router-native";

import { DATA } from '../App'

export default function AnimeStr ({match}) {
  const anime = DATA[match.params.title]
    return (
  <BackButton>
    <View style={styles.container}>
      <Image source={anime.uri}style={styles.imgBg} blurRadius={7} />
      <Image source={anime.uri}style={styles.img} />
      <Text style={styles.titleAnime}>{anime.title}</Text>
      <View>
        
      </View>
    </View>
  </BackButton>)
}

const styles = StyleSheet.create({
  img : {
    zIndex : 1,
    marginTop : 50,
    width : 200,
    height : 300,
    resizeMode : 'cover',
    borderRadius: 10,
  },
  imgBg : {
    opacity: .5,
    flex: 1,
    resizeMode: 'cover',
    zIndex : -1,
    width : Dimensions.get('window').width,
    height : 350,
    position: 'absolute',
    borderBottomLeftRadius : 20,
    borderBottomRightRadius : 20
  },
  container : {
    margin : 0,
    alignItems: 'center'
  },
  titleAnime : {
    fontWeight: "bold",
    fontSize: 20,
    maxWidth: 250,
  }
})
