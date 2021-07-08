import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, DrawerLayoutAndroid, Image, FlatList, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, BackButton } from "react-router-native";

import AnimeStr from './src/animeStr'
import Anime from './src/anime'
import navigationView from './src/navigationView'

const DATA = [
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '0',
    duber : [{
      name : 'Дабер',
    }]
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '1'
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '2'
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '3'
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '4'
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '5'
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '6'
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '7'
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '8'
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '9'
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '10'
  },
  {
    uri : {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title : 'Егор Мамонов Павлович',
    opis : 'Супер крутое аниме 228 1337',
    id : '11'
  }

]

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
              opis : element.opis,
              id : id
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
    <Anime title={item.title} opis={item.opis} uri={item.uri} id={item.id} />
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
        <Route path="/animeSt/:title" component={AnimeStr} />
        <Route path="/animeSt/:title" component={AnimeStr} />
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
    width : Dimensions.get('window').width,
    borderTopWidth : 1,
    borderStyle : 'solid',
    borderColor : 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding : 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff'
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

export {DATA};
