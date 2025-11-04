import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Main } from './components/Main.jsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css'
export default function App() {

  return (
    <SafeAreaProvider> 
    <View style={styles.container}> 
      <StatusBar style="light" />
      <Main/>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // color fondo
    alignItems: 'center', // centrar texto
    justifyContent: 'center',
    padding: 12
  },
});
