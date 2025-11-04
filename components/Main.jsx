import { FlatList, StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { getInfoCharacters } from '../lib/metacritic.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedCharacterCard, CharacterCard } from './CharacterCard.jsx';

export function Main() {

  const [characters, setCharacters] = useState([]); 
  const insets = useSafeAreaInsets(); //area segura para mostrar contenido

  useEffect(() => {
    getInfoCharacters().then(setCharacters)
    
  }, []); 

  return (

    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
      <View style={{marginBottom: 20}}>
        <Image source={{uri:'https://w7.pngwing.com/pngs/277/446/png-transparent-rick-and-morty-illustratrion-rick-sanchez-morty-smith-rick-and-morty-season-1-television-show-youtube-rick-and-morty-television-logo-computer-wallpaper-thumbnail.png'}}
          style={{width: 50, height: 50}}
        />

      </View>
      {characters.length == 0 ? (
        <ActivityIndicator color={'#fff'} size={'large'}/>
      ) : (

        // <ScrollView>
        // {characters.map((character) => (
        //   <CharacterCard key={character.id} character={character} />
        // ))}
        // </ScrollView>

        <FlatList //recomendado para listas largas
          data={characters}
          keyExtractor={(character) => character.id}
          renderItem={({item, index}) => <AnimatedCharacterCard character={item} index={index}/>}
        
        /> 
      )}

    </View>
  );
}

