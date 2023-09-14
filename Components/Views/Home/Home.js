import { View, Text, Platform } from 'react-native'
import React from 'react'
import TopDis from '../../components/TopDis'
import { Colors } from '../../Assets/Colors'

export default function Home() {
    return (
        <View style={{ display: "flex", flex: 1, backgroundColor: Colors.SpotifyThemeGradient.black2 }}>
            <TopDis />
            <Text style={{ color: "white",fontSize:40 }}>Home Page</Text>
        </View>
    )
}