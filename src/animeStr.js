import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Button, TouchableOpacity, DrawerLayoutAndroid, Image, FlatList } from 'react-native';
import { NativeRouter, Route, Link, BackButton } from "react-router-native";

export default function AnimeStr ({match}) {
    return (<BackButton>
    <Text>{JSON.stringify(match.params.title)}</Text>
  </BackButton>)
}
