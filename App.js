import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, DrawerLayoutAndroid, Image, FlatList } from 'react-native';
import { NativeRouter, Route, Link, BackButton } from "react-router-native";

import AnimeStr from './src/animeStr'
import Anime from './src/anime'
import navigationView from './src/navigationView'

const DATA = []

function api () {
  fetch("http://diwos.online/ongoing")
  .then(res => res.json())
  .then(
    (result) => {
      result.forEach(
        (element) => {
          DATA.push(
            {
              uri : {uri : element.uri},
              title : element.title,
              opis : element.opis
            }
          )
        }
      )

    }
  )
}

const t = 123;
export default function App() {
  const AnimeBlock = ({ item }) => (
    <Anime title={item.title} opis={item.opis} uri={item.uri}/>
  )

  const Home = () => (
    <DrawerLayoutAndroid
    drawerWidth={300}
    drawerPosition = {'left'}
    renderNavigationView={navigationView}
    >
      <SafeAreaView style = { styles.container }>
        <View style = { styles.search }>
          <TextInput style = { styles.input } />
          <StatusBar style = "auto" />
        </View>
        <View style = { styles.scroll}>
          <ScrollView>
            <FlatList data={DATA}
            renderItem={AnimeBlock} />
          </ScrollView>
        </View>
        <View style = { styles.panel}>
          <TouchableOpacity style={ styles.button }>
            <Text>Уведомление</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.button }>
            <Text>Мои</Text>
          </TouchableOpacity>
          <Link to={"/animeStr/" + t} underlayColor="#f0f4f7">
          <View style={ styles.button }>
            <Text>Настройка</Text>
          </View>
          </Link>
        </View>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  )

    return (
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route path="/animeStr/:title" component={AnimeStr} />
      </NativeRouter>
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
    padding : 10,
  },
  text : {
    fontSize : 42
  },
  scroll : {
    maxHeight : '80%',
    padding : 20
  },
  button : {
    alignItems: "center",
    padding: 10
  },
});
