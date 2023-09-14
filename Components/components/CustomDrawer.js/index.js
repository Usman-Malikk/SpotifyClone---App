import { View, Text, ImageBackground, Alert } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CustomDrawer(props) {
    const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
    let { navigation } = props
    console.log("🚀 ~ file: index.js:35 ~ CustomDrawer ~ props:", props)

    return (
        <View style={{ backgroundColor: "white", display: "flex", flexDirection: "column", height: "100%" }}>
            <View  >
                <ImageBackground source={{ uri: "https://legacy.reactjs.org/logo-og.png" }} resizeMode="cover"
                    style={{ height: 200, objectFit: "contain", justifyContent: "center", alignItems: 'center' }}

                >
                    <TouchableOpacity style={{ backgroundColor: "black", width: '100%' }} onPress={() => { navigation.navigate('HomeCheck') }}>

                        <Text style={{ color: "white", textAlign: 'center' }}>Hello world</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
            <DrawerContentScrollView {...props} >
                <View>
                    <DrawerItemList {...props} />
                    {/* <DrawerItem
                        label="Help"
                        onPress={() => Linking.openURL('https://mywebsite.com/help')}
                    /> */}
                </View>
            </DrawerContentScrollView>
            <View><Text style={{  fontSize: 15 }}> Logout</Text></View>
        </View>
    )
}
