import { useEffect } from "react";
import { Image, Text, View } from "react-native";

const ProductScreen = ({ navigation, route }) => {
    useEffect(() => {
        if (route.params) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            console.log(route.params)
        }
    }, [route.params]);

    return (
        <View>
            {route.params && (
                <>
                    <Text>{route.params?.title}</Text>

                    <Image
                        style={{ width: 300, height: 200, marginTop: 20 }}
                        source={{ uri:  route.params?.image  }} />
                </>
            )}
        </View>
    );
};

export default ProductScreen;
