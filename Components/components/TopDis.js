import { View, Text, Platform, StatusBar } from 'react-native'
import React from 'react'
import { Colors } from '../Assets/Colors'

export default function TopDis() {
    return (
        <View style={{ backgroundColor: Colors.SpotifyThemeGradient.black2 }}>
            <StatusBar style="light" />
            {
                Platform.OS === 'android' && <View style={{ marginTop: 30 }}>
                </View>
            }
        </View>
    )
}