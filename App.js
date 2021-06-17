import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, DrawerLayoutAndroid, Image } from 'react-native';




export default function App() {
  const Anime = () => (
    <View style={styles.animeView}>
      <Image source={{uri : 'https://avatars.mds.yandex.net/get-zen_doc/3644947/pub_5f6b3f012ac02858cefae551_5f6b5dc842c2f942be29268d/scale_1200'}} style={styles.img} />
      <View style={{marginLeft : 10}}>
        <Text style = { styles.nameAnime } numberOfLines={2}>Может, я встречу тебя в подземель1231е? 3 OVA</Text>
        <Text style = { [styles.animeOpis, {marginTop : 10}] } numberOfLines={3}>123 12312312 312 3 123 123123213 123123 213 123 13123123 1</Text>
      </View>
    </View>
  );

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
              <Anime />
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
  },
  animeOpis : {
    fontSize : 20,
    maxWidth : '80%'
  },
  nameAnime : {
    fontWeight: 'bold',
    fontSize : 20,
    maxWidth : '80%'
  }
});
