import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, DrawerLayoutAndroid, Image, FlatList } from 'react-native';
import { Link } from "react-router-native";

export default function Anime ({ title, opis, uri }) {
    return (
      <Link to="/animeStr/title" underlayColor="#f0f4f7">
      <View style={styles.animeView}>
        <Image source={uri}style={styles.img} />
        <View style={{marginLeft : 10}}>
          <Text style = { styles.nameAnime } numberOfLines={2}>{title}</Text>
          <Text style = { [styles.animeOpis, {marginTop : 10}] } numberOfLines={3}>{opis}</Text>
        </View>
      </View>
      </Link>
)
}

const styles = StyleSheet.create({
  animeView : {
    flex : 1,
    flexDirection: 'row',
    marginTop : 10
  },
  img : {
    width : 100,
    height : 150,
    resizeMode : 'cover'
  },
  animeOpis : {
    fontSize : 20,
    minWidth : '70%',
    maxWidth : '80%'
  },
  nameAnime : {
    fontWeight: 'bold',
    fontSize : 20,
    minWidth : '70%',
    maxWidth : '80%'
  }
})
