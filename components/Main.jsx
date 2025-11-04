import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { getInfoCharacters } from '../lib/metacritic.js';

export function Main() {

  const [characters, setCharacters] = useState([]); 

  useEffect(() => {
    getInfoCharacters().then(setCharacters)
    
  }, []); 

  return (
    <> 
      
      
      <ScrollView contentContainerStyle={styles.scroll}>
        {characters.map((character) => (
          <View key={character.id} style={styles.card}> 
          <Image source={{uri: character.image}} style={styles.image}/>
          <Text style={styles.text}> {character.name} - {character.species}</Text>
          <Text style={styles.sub}> {character.status} - {character.gender} </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // color fondo
    alignItems: 'center', // centrar texto
    justifyContent: 'center',
  },
   scroll: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  card: {
    margin: 5,
    marginBottom: 20
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginTop: 8
  }, 
  sub: {
    color: "#aaa",
    fontSize: 14
  }
});
