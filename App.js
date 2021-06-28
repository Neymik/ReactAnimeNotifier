import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, DrawerLayoutAndroid, Image, FlatList } from 'react-native';
import { NativeRouter, Route, Link, BackButton } from "react-router-native";

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
api()


export default function App() {

  const AnimeStr = () => (
    <BackButton>
      <Text>1</Text>
    </BackButton>
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
          <TouchableOpacity style={ styles.button }>
            <Text>Настройка</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  )
  const Anime = ({ title, opis, uri }) => (
    <Link to="/animeStr" underlayColor="#f0f4f7">
      <View style={styles.animeView}>
        <Image source={uri}style={styles.img} />
        <View style={{marginLeft : 10}}>
          <Text style = { styles.nameAnime } numberOfLines={2}>{title}</Text>
          <Text style = { [styles.animeOpis, {marginTop : 10}] } numberOfLines={3}>{opis}</Text>
        </View>
      </View>
      </Link>
  )

  const AnimeBlock = ({ item }) => (
    <Anime title={item.title} opis={item.opis} uri={item.uri}/>
  )

  const navigationView = () => (
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
  );
    return (
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route path="/animeStr" component={AnimeStr} />
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
  navig : {
    flex : 1,
    flexDirection: 'column',
    paddingTop : 20,
  },
  buttonNavig : {
    alignItems: "center",
    padding: 20,
  },
  img : {
    width : 100,
    height : 150,
    resizeMode : 'cover'
  },
  animeView : {
    flex : 1,
    flexDirection: 'row',
    marginTop : 10
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
});
