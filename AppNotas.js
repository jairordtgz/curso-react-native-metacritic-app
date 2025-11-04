import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, Pressable } from 'react-native';
import { useEffect, useState } from 'react';

// importar imagen local
import icon from './assets/icon.png'; 
import { getLatestGames } from './lib/metacritic';
// const icon = require('./assets/icon.png')

export default function App() {

  const [games, setGames] = useState([]); 

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games); 
    });
  }, [])


  return (

    // View es similar a div, view esta en flex
    // sin componente Text no se puede añadir texto

    <View style={styles.container}> 

      {/* <Image source={icon} style={{ //imagen local
        width: 100,  //numero de pixeles efectivos en pantalla
        height: 100,
        resizeMode: 'center'
        }}/>   */}

        {/* <Image source={{uri:"https://www.lucasfilm.com/app/uploads/andor-season-2-key-art-poster-480x711.jpg"}} // imagen de la web 
        style={{
          width: 350, 
          height: 600
        }}/> */}
      
       
      {/* <Text style={{color: 'white'}}>Ya lo pasado pasadoooooo!</Text>
      <Button 
      color='red'
      title='Pulsa aqui' 
      onPress={() => alert('Hola bro')}
      />  */}
      {/* no se puede poner estilos en boton */}


      {/* alternativa de boton estilizable */}
      {/* <TouchableHighlight 
        underlayColor={"#09f"}
        onPress={() => alert("Hola guapa de lentes")}
        style={{
          width: 200, 
          height: 200, 
          backgroundColor: 'red',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center' 
        }}
      > 
        <Text style={{color: 'white'}}>Ya lo pasado pasadoooooo!</Text>
      </TouchableHighlight> */}

      {/* <TouchableOpacity // boton estilizable que indica al usuario cuando se pulsa un boton
        onPress={() => alert("Hola guapa de lentes")}
        style={{
          width: 200, 
          height: 200, 
          backgroundColor: 'red',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center' 
        }}
      > 
        <Text style={{color: 'white'}}>Ya lo pasado pasadoooooo!</Text>
      </TouchableOpacity> */}


        <Pressable // componente boton customizable mas recomandado
          onPress={() => {
            
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'
              
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={{fontSize: pressed ? 32: 16}}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>


      <StatusBar eww style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // color fondo
    alignItems: 'center', // centrar texto
    justifyContent: 'center',
  },
});
