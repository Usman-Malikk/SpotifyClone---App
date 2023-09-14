import { View, Text, SafeAreaView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../../Assets/Colors'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as AppAuth from 'expo-app-auth'
// import axios from 'axios';



export default function Signup({ navigation }) {
    const HandleAuth = async () => {
        const config = {
            issuer: "https://accounts.spotify.com",
            clientId: '52243dc866cb4dab9ffacc583a8c3fd9',
            scopes: [
                'user-read-email',
                'user-library-read',
                'user-top-red',
                'user-read-recently-played',
                'playlist-read-private',
                'playlist-modify-public',
                'playlist-modify-private'

            ],
            redirectUrl: "exp://192.168.18.253:8082"
        }
    }

    return (
        <LinearGradient colors={[Colors.SpotifyThemeGradient.black1, Colors.SpotifyThemeGradient.black1]} style={{
            height: "100%",
        }}>
            <SafeAreaView style={{ justifyContent: "center", alignItems: "center", gap: 30 }} >
                <View style={{ marginTop: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Entypo name="spotify" size={100} color="white" />
                </View>
                <Text style={{ color: "white", fontWeight: '900', fontSize: 45, textAlign: "center" }}>Millions of Songs Free on Spotify!</Text>
                {/* Buttons-- */}
                <View style={{ gap: 20, marginTop: 30 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Drawer') }}
                        style={{ width: 350, paddingVertical: 13, borderRadius: 30, backgroundColor: '#1DB954' }}>
                        <Text style={{ textAlign: "center", fontWeight: "700", }}>
                            Sign in with Spotify
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Linking.openURL('sms:+923317220554') }} style={{
                        width: 350,
                        backgroundColor: "#131624",
                        paddingVertical: 13,
                        borderRadius: 30, flexDirection: "row",
                        border: "1px solid white",
                        alignItems: 'center',
                        borderColor: '#C0C0C0',
                        borderWidth: 1
                    }}>
                        <FontAwesome name="mobile-phone" size={30} color="white" style={{ marginLeft: 20 }} />
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: "700", flex: 1
                        }}>
                            Continue with Phone number
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        width: 350,
                        backgroundColor: "#131624",
                        paddingVertical: 13,
                        borderRadius: 30, flexDirection: "row",
                        alignItems: 'center',
                        borderColor: '#C0C0C0',
                        borderWidth: 1
                    }}>
                        <AntDesign name="google" size={30} color="red" style={{ marginLeft: 20 }} />
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: "700", flex: 1
                        }}>
                            Sign in with Google
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 350,
                        backgroundColor: "#131624",
                        paddingVertical: 13,
                        borderRadius: 30, flexDirection: "row",
                        alignItems: 'center',
                        borderColor: '#C0C0C0',
                        borderWidth: 1
                    }}>
                        <AntDesign name="facebook-square" size={30} color="#1877F2" style={{ marginLeft: 20 }} />
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: "700", flex: 1
                        }}>
                            Sign in with Facebook
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}