import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import "./global.css"

export function CharacterCard({character}) {
    return (
        <View key={character.id} style={styles.card}> 
        <Image source={{uri: character.image}} style={styles.image}/>
        <Text style={styles.text}> {character.name} - {character.species}</Text>
        <Text style={styles.sub}> {character.status} - {character.gender} </Text>
        </View>
    )
}

export function AnimatedCharacterCard({character, index}){
    const opacity = useRef(new Animated.Value(0)).current; 
    
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500, 
            delay: index*500,
            useNativeDriver: true,
        }).start(); 
    }, [opacity, index])
    
    
    return (
        <Animated.View style={{opacity}}> 
            <CharacterCard character={character}/>
        </Animated.View>
    )

}

const styles = StyleSheet.create({
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
