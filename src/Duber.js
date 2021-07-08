import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, DrawerLayoutAndroid, Image, FlatList, Dimensions } from 'react-native';
import { NativeRouter, Route, Link, BackButton } from "react-router-native";

export default function Duber ({ title }) {
    return (
      <View style={styles.animeView}>
        <Image source={uri}style={styles.img} />
        <View style={{marginLeft : 10}}>
          <Text style = { styles.nameAnime } numberOfLines={2}>{title}</Text>
          <Text style = { [styles.animeOpis, {marginTop : 10}] } numberOfLines={3}>{opis}</Text>
        </View>
      </View>
)
}
