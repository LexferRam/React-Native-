import { ActivityIndicator, Alert, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Surface } from "react-native-paper";
import axios from 'axios'
import { useEffect, useState } from "react";

const ProductsScreen = ({ navigation }) => {

    const [todos, setTodos] = useState(null)

    useEffect(() => {
        (async function () {
            const { data } = await axios.get("https://fakestoreapi.com/products")
            setTodos(data)
        })()
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ebebeb' }}>

       

            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>

                        {todos === null && (
                            <ActivityIndicator size="large" color="#0000ff" />
                        )}

                        {todos?.slice(0, 4).map((item, i) => (
                            <Pressable key={item.id} onPress={() => alert(item.title)}>
                                <Surface style={styles.surface}>
                                    {/* <Text>{item.title}</Text> */}
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: item.image }} />
                                </Surface>
                            </Pressable>
                        ))}

                    </View>

                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                        {todos?.slice(4, 5).map((item, i) => (
                            <Pressable key={item.id} onPress={() => alert(item.title)}>
                                <Surface style={{
                                    margin: 5,
                                    padding: 10,
                                    height: 150,
                                    width: 310,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    elevation: 10,
                                }}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: item.image }} />
                                </Surface>
                            </Pressable>
                        ))}

                    </View>

                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>



                        {todos?.slice(5, todos.length).map((item, i) => (
                            <Pressable key={item.id} onPress={() => alert(item.title)}>
                                <Surface style={styles.surface}>
                                    <Image
                                        style={{ width: '100%', height: '100%' }}
                                        source={{ uri: item.image }} />
                                </Surface>
                                <Button
                                    mode="outlined"
                                    color="#1259c3"
                                    uppercase={false}
                                    style={{ margin: 5, textTransform: 'capitalize' }}
                                    onPress={() => {
                                        // console.log(item)
                                        navigation.navigate('Product',item)
                                    }}
                                >
                                    Ver Detalle
                                </Button>
                            </Pressable>
                        ))}

                    </View>
                </ScrollView>
            </SafeAreaView>


        </View>
    );
};

export default ProductsScreen;

const styles = StyleSheet.create({
    surface: {
        margin: 5,
        padding: 10,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
});
