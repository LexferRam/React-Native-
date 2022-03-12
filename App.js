import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Drawer } from 'react-native-paper';
import { useState } from 'react';
import ProductsScreen from './screens/ProductsScreen';
import Navigation from './components/Navigation';
import ProductScreen from './screens/ProductScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [active, setActive] = useState('');
  return (
    <>
      <NavigationContainer>
        <View style={{ width: '100%', height: 50, backgroundColor: '#fff159', marginBottom: 30 }}>
          {/* <Text>Lexfer Screen</Text>
                <Button mode="contained" onPress={() => {
                    navigation.navigate('Home')
                }}>Go to Home</Button> */}

          <Image
            style={{ width: '100%', height: '100%', marginTop: 20 }}
            source={{ uri: "https://storage.googleapis.com/www-paredro-com/uploads/2019/05/MercadoLibre.jpg" }} />


        </View>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ProductsScreen} options={{ headerShown: false, }} />
          <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false, }} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Navigation /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
