import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, DrawerLayoutAndroid, Image, FlatList } from 'react-native';


const DATA = [
  {
    uri: {uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'},
    title: 'Егор',
    opis: '3',
  },
  {
    uri: {uri : 'https://im0-tub-ru.yandex.net/i?id=7ab79c2522f9a0928685f0c2bcb141a3&n=13&exp=1'},
    title: 'Мамонов',
    opis: '2',
  },
  {
    uri: {uri : 'http://pm1.narvii.com/7667/2dce5b9f5ffc69508498fed2c31f85f7c815b82fr1-821-1200v2_uhq.jpg'},
    title: 'Павлович',
    opis: '1',
  },
  {
    uri: {uri : 'https://get.wallhere.com/photo/illustration-long-hair-anime-anime-girls-blue-eyes-water-brunette-cartoon-black-hair-hair-wet-swimwear-clothing-mangaka-31898.jpg'},
    title: 'Павлович',
    opis: '4',
  },
  {
    uri: {uri : 'https://im0-tub-ru.yandex.net/i?id=4466cc09c5a7059cc1637db851663097&ref=rim&n=33&w=107&h=150'},
    title: 'Павлович',
    opis: '5',
  },
  {
    uri: {uri : 'https://im0-tub-ru.yandex.net/i?id=85957fd0c24e957e377bf9cf257aaecb&ref=rim&n=33&w=184&h=150'},
    title: 'Павлович',
    opis: '6',
  },
];

export default function App() {
  const Anime = ({ title, opis, uri }) => (
    <TouchableOpacity>
      <View style={styles.animeView}>
        <Image source={uri}style={styles.img} />
        <View style={{marginLeft : 10}}>
          <Text style = { styles.nameAnime } numberOfLines={2}>{title}</Text>
          <Text style = { [styles.animeOpis, {marginTop : 10}] } numberOfLines={3}>{opis}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
